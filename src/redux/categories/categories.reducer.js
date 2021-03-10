import CategoriesActionTypes from './categories.type';

const INITIAL_STATE = {
  categories: null,
  isFetching: false,
  isLoaded: false,
  errorMessage: undefined
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        categories: action.payload
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;