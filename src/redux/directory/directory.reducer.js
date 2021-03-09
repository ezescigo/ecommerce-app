import DirectoryActionTypes from './directory.type';

const INITIAL_STATE = {
  sections: null,
  isFetching: true,
  errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_DIRECTORY_START:
      return {
        ...state,
        isFetching: true
      };
    case DirectoryActionTypes.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload
      };
    case DirectoryActionTypes.FETCH_DIRECTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default directoryReducer;