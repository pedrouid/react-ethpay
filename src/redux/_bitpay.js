import { apiGetRates } from '../helpers/api';
import { getRate } from '../helpers/utilities';

// -- Constants ------------------------------------------------------------- //
const GET_RATES_REQUEST = 'bitpay/GET_RATES_REQUEST';
const GET_RATES_SUCCESS = 'bitpay/GET_RATES_SUCCESS';
const GET_RATES_FAILURE = 'bitpay/GET_RATES_FAILURE';
const UPDATE_INPUT_VALUE = 'bitpay/UPDATE_INPUT_VALUE';

// -- Actions --------------------------------------------------------------- //
export const bitpayGetRates = code =>
  (dispatch) => {
    dispatch({ type: GET_RATES_REQUEST });
    apiGetRates()
    .then((data) => {
      dispatch({
        type: GET_RATES_SUCCESS,
        payload: {
          selectedRate: getRate(data, code),
          ratesJSON: data
        }
      });
    })
    .catch(() => {
      dispatch({ type: GET_RATES_FAILURE });
    });
  };

export const updateInput = (value, selectedRate) =>
  (dispatch) => {
    const conversion = this.props.selectedRate;
    const input = value || '';
    let result = '';
    if (this.state.crypto) {
      result = (Number(input) * conversion).toFixed(2);
      this.setState({ conversionValue: result });
    } else {
      result = (Number(input) / conversion).toFixed(8);
      this.setState({ conversionValue: result });
    }
    dispatch({
      type: UPDATE_INPUT_VALUE,
      payload: {
        input,
        result
      }
    });
  };

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  ratesJSON: {},
  selectedRate: 0
};

export const bitpayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RATES_REQUEST:
      return { ...state, fetching: true };
    case GET_RATES_SUCCESS:
      return {
        ...state,
        fetching: false,
        rate: action.payload.ratesJSON,
        selectedRate: action.payload.selected
      };
    case GET_RATES_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
