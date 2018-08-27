import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Give some thought to what keys you use, as that is what appears as state
export default combineReducers({
  auth: authReducer
});
