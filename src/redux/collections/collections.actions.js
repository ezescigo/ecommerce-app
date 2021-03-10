import CollectionsActionTypes from './collections.type';
import axios from 'axios';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: CollectionsActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (Category, Collection) => ({
  type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: { category: Category, collection: Collection }
});

export const fetchCollectionsFailure = errorMessage => ({
  type: CollectionsActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = ({
  category,
  subcategory,
}) => {
  return (dispatch, getState) => {
    const isFetching = getState().collections.isFetching;
    if (!isFetching) {
      dispatch(fetchCollectionsStart());

      try {
        // if (subcategory !== '') {
        //   category = subcategory;
        // }
        axios.get(`/api/category/${category}`).then(response => {
          const data = response.data;
          dispatch(fetchCollectionsSuccess(category, data));
        });
      } catch (error) {
        dispatch(fetchCollectionsFailure(error.message))
      }
    }
  }
};

// thanks to redux thunk:
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef.get().then(snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       dispatch(fetchCollectionsSuccess(collectionsMap));
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   }
// }



// collections.actions.js for Firestore fetching:

// import CollectionsActionTypes from './collections.type';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// export const fetchCollectionsStart = () => ({
//   type: CollectionsActionTypes.FETCH_COLLECTIONS_START,
// });

// export const fetchCollectionsSuccess = collectionsMap => ({
//   type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
//   payload: collectionsMap
// });

// export const fetchCollectionsFailure = errorMessage => ({
//   type: CollectionsActionTypes.FETCH_COLLECTIONS_FAILURE,
//   payload: errorMessage
// });

// // thanks to redux thunk:
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef.get().then(snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       dispatch(fetchCollectionsSuccess(collectionsMap));
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   }
// }