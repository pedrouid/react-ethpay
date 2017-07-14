import { combineReducers } from 'redux';
import { bitcoinReducer } from './_bitcoin';

export default combineReducers({
  bitcoin: bitcoinReducer
});
