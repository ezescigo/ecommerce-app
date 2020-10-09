// Gets the initial/last state obj and the action

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }

    //The function will receive any action that ever gets fired. If its not related:
    default:
      return state;
  }
}

export default userReducer;