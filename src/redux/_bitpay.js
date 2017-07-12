import { apiGetRates } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //
const GET_RATES_REQUEST = 'bitpay/GET_RATES_REQUEST';
const GET_RATES_SUCCESS = 'bitpay/GET_RATES_SUCCESS';
const GET_RATES_FAILURE = 'bitpay/GET_RATES_FAILURE';

// -- Actions --------------------------------------------------------------- //
export const bitpayGetRates = code =>
  (dispatch) => {
    dispatch({ type: GET_RATES_REQUEST });
    apiGetRates(code)
    .then(({ data }) => {
      dispatch({
        type: GET_RATES_SUCCESS,
        payload: data.rate
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: GET_RATES_FAILURE });
    });
  };


// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  rate: 0
};

export const bitpayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RATES_REQUEST:
      return { ...state, fetching: true };
    case GET_RATES_SUCCESS:
      return {
        ...state,
        fetching: false,
        rate: action.payload
      };
    case GET_RATES_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
