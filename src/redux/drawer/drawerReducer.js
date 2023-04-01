import ActionsType from '../ActionsType';

const initialState = {
  aboutUs: {},
  events: [],
};

const drawerReducer = (state = initialState, action) => {
  var newState = {};
  switch (action.type) {
    case ActionsType.SET_ABOUT_US:
      newState = {
        ...state,
        aboutUs: action.payload,
      };
      return newState;
    case ActionsType.SET_EVENTS:
      newState = {
        ...state,
        events: action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default drawerReducer;
