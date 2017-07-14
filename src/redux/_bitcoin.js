import { apiGetRate, apiGetHistory } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //
const GET_RATE_REQUEST = 'bitcoin/GET_RATE_REQUEST';
const GET_RATE_SUCCESS = 'bitcoin/GET_RATE_SUCCESS';
const GET_RATE_FAILURE = 'bitcoin/GET_RATE_FAILURE';

const GET_HISTORY_REQUEST = 'bitcoin/GET_HISTORY_REQUEST';
const GET_HISTORY_SUCCESS = 'bitcoin/GET_HISTORY_SUCCESS';
const GET_HISTORY_FAILURE = 'bitcoin/GET_HISTORY_FAILURE';

// -- Actions --------------------------------------------------------------- //
export const bitcoinGetRate = code =>
  (dispatch) => {
    dispatch({ type: GET_RATE_REQUEST });
    apiGetRate(code)
    .then(({ data }) => {
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: data.rate
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: GET_RATE_FAILURE });
    });
  };

export const bitcoinGetHistory = (code, period, average) =>
  (dispatch) => {
    dispatch({ type: GET_HISTORY_REQUEST });
    apiGetHistory(code, period)
    .then(({ data }) => {
      let chart = [];
      if (average) {
        chart = data.map(ticker => [ticker.average, ticker.time]);
      }
      dispatch({
        type: GET_HISTORY_SUCCESS,
        payload: chart
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: GET_HISTORY_FAILURE });
    });
  };


// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  history: [],
  rate: 0
};

export const bitcoinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RATE_REQUEST:
    case GET_HISTORY_REQUEST:
      return { ...state, fetching: true };
    case GET_RATE_SUCCESS:
      return {
        ...state,
        fetching: false,
        rate: action.payload
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        fetching: false,
        history: action.payload
      };
    case GET_HISTORY_FAILURE:
    case GET_RATE_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
