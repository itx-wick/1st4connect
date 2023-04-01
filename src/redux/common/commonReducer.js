import ActionsType from '../ActionsType';
const INITIAL_STATE = {
  fromDate: '',
  toDate: '',
  userType: '',
  loader: false,
  usersList: [],
};

const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_FROM_DATE:
      return {
        ...state,
        fromDate: action.payload,
      };
    case ActionsType.SET_TO_DATE:
      return {
        ...state,
        toDate: action.payload,
      };
    case ActionsType.SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case ActionsType.USERS_LIST:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case ActionsType.UPDATE_USERS_LIST:
      return {
        ...state,
        usersList: state.usersList.map(person => {
          if (person.ID === action.payload.ID) {
            return action.payload;
          }
          return person;
        }),
      };
    case ActionsType.CLEAR_USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };
    case ActionsType.USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
