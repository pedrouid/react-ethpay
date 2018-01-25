import { combineReducers } from 'redux';
import ethereum from './_ethereum';
import auth from './_auth';

export default combineReducers({
  ethereum,
  auth
});
