import { combineReducers } from 'redux';
import { authenticationReducer } from './_authentication';

export default combineReducers({
  authentication: authenticationReducer
});
