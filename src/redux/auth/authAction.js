import ActionsType from '../ActionsType';

export const login = user => dispatch => {
  dispatch({
    type: ActionsType.LOGGED_IN,
    payload: {isLoggedIn: true, user: user},
  });
};

export const setCurrentUser = data => dispatch => {
  dispatch({
    type: ActionsType.CURRENT_USER,
    payload: data,
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: ActionsType.LOGGED_OUT,
  });
};
