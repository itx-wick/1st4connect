import ActionsType from '../ActionsType';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
};

const authReducer = (state = initialState, action) => {
  var newState = {};
  switch (action.type) {
    case ActionsType.LOGGED_IN:
      newState = {
        isLoggedIn: action.payload.isLoggedIn,
        currentUser: action.payload.user,
      };
      return newState;
    case ActionsType.CURRENT_USER:
      newState = {
        currentUser: action.payload,
      };
      return newState;
    case ActionsType.LOGGED_OUT:
      newState = {
        isLoggedIn: false,
        currentUser: {},
      };
      return newState;
    default:
      return state;
  }
};

export default authReducer;
