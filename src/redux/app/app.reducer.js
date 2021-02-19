import AppActionsTypes from './app.types';

const INITIAL_STATE = {
  mobileView: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionsTypes.TOGGLE_MOBILE_VIEW:
      return {
        ...state,
        mobileView: !state.mobileView,
      }
    default:
      return state
  }
};

export default appReducer;