import { SET_ALERT, REMOVE_ALERT } from '../actionTypes';

const initialState = {
  alert: {
    isOpen: false,
    color: "primary",
    toggle: false,
    message: '',
    timeout: 5000
  }
};

const commonReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      let alert = {
        isOpen: true,
        color: payload.color || "success",
        toggle: payload.toggle === false ? false : true,
        message: payload.message,
        timeout: payload.timeout || 5000,
      }
      return { ...state, alert: alert };
    case REMOVE_ALERT:
      return { ...state, alert: initialState.alert };
    default:
      return state;
  }
};

export default commonReducer;