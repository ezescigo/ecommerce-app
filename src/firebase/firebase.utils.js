import firebase from 'firebase/app';
import 'firebase/firestore';   // Databse
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXamL8RYYs_KzKSFU_FIx1I2TRyM0g_nQ",
    authDomain: "ecommerce-app-db-7683a.firebaseapp.com",
    databaseURL: "https://ecommerce-app-db-7683a.firebaseio.com",
    projectId: "ecommerce-app-db-7683a",
    storageBucket: "ecommerce-app-db-7683a.appspot.com",
    messagingSenderId: "351978973223",
    appId: "1:351978973223:web:bc4bbab3b17cc1ce4d4602",
    measurementId: "G-8TL9KFRZ1G"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if userAuth obj null -sign out-, exit function
  if (!userAuth) return;

  // Get user snapShot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  // Check if User exists in our db, if not Create User Document
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Google Authentication Utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' }); // Triggers Google Pop Up whenever we use GoogleAuthProvider for authentication and sign in.
  export const signInWithGoogle = () => auth.signInWithPopup(provider); // To use Google's Sign In Pop Up.

  export default firebase;