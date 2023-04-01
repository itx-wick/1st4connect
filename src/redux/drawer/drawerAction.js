import ActionsType from '../ActionsType';

//About
export const setAboutUs = data => dispatch => {
  dispatch({
    type: ActionsType.SET_ABOUT_US,
    payload: data,
  });
};

//Events
export const setEvents = data => dispatch => {
  dispatch({
    type: ActionsType.SET_EVENTS,
    payload: data,
  });
};
