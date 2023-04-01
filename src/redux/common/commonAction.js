import ActionsType from '../ActionsType';

export const setLoader = value => ({
  type: ActionsType.SET_LOADER,
  payload: value,
});

export const setStartDate = value => ({
  type: ActionsType.SET_FROM_DATE,
  payload: value,
});

export const setEndDate = value => ({
  type: ActionsType.SET_TO_DATE,
  payload: value,
});

export const setUsersList = data => dispatch => {
  dispatch({
    type: ActionsType.USERS_LIST,
    payload: data,
  });
};

export const updateUsersList = data => dispatch => {
  dispatch({
    type: ActionsType.UPDATE_USERS_LIST,
    payload: data,
  });
};

export const clearUsersList = data => dispatch => {
  dispatch({
    type: ActionsType.CLEAR_USERS_LIST,
    payload: data,
  });
};

export const setUserType = data => dispatch => {
  dispatch({
    type: ActionsType.USER_TYPE,
    payload: data,
  });
};
