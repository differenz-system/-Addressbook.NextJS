
import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
  isLogin: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      localStorage.setItem('isLogin', false);
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default authReducer;