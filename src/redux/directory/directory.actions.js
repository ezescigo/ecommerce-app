import DirectoryActionTypes from './directory.type';
import axios from 'axios';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchDirectoryStart = () => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccess = sections => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: sections
});

export const fetchDirectoryFailure = errorMessage => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_FAILURE,
  payload: errorMessage
});

export const fetchDirectoryStartAsync = () => {
  return dispatch => {
    dispatch(fetchDirectoryStart());

    try {
      axios.get('/api/sections').then(response => {
        const data = response.data;
        console.log(data);
        dispatch(fetchDirectorySuccess(data));
      });
    } catch(error) {
      dispatch(fetchDirectoryFailure(error.message))
    }
  }
};
