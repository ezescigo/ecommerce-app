import CategoriesActionTypes from './categories.type';
import axios from 'axios';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = categories => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = errorMessage => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage
});

export const fetchCategoriesStartAsync = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());

    try {
      axios.get('/api/category').then(response => {
        const data = response.data;
        console.log(data);
        dispatch(fetchCategoriesSuccess(data));
      });
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message))
    }
  }
};
