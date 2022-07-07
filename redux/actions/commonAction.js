import { SET_ALERT, REMOVE_ALERT } from "../actionTypes";

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload: payload
});

export const removeAlert = () => ({
  type: REMOVE_ALERT
});