import { combineReducers } from 'redux';
import { bitpayReducer } from './_bitpay';

export default combineReducers({
  bitpay: bitpayReducer
});
