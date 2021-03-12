import CollectionsActionTypes from './collections.type';

const INITIAL_STATE = {
  collections: {},
  isFetching: false,
  errorMessage: undefined,
  isLoaded: false,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: { ...state.collections, [action.payload.category]: action.payload.collection },
        isLoaded: true,
      };
    case CollectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default collectionsReducer;