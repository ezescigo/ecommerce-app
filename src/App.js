import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import WishlistPage from './pages/wishlist/wishlist.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import { ToastContainer } from "react-toastify";

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { selectCollectionsForPreview } from './redux/collections/collections.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        // check if signed in
      if (userAuth) {
        // Get back the userRef obj from our createUserProfileDocument method passing userAuth. If it exists in our db, will bring the data, if not will create a new one.
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe/listen to any changes in userRef data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    
      // addCollectionAndDocuments('collections', collectionsArray);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header />
        <ToastContainer autoClose={3000} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/wishlist' component={WishlistPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route 
            exact path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    )
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
