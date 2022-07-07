import authReducer from './authReducer';
import addressBookReducer from './addressBookReducer';
import commonReducer from './commonReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  addressBook: addressBookReducer,
  common: commonReducer
});

export default rootReducer;