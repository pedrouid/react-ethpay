import { apiGetRate } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //
const GET_RATE_REQUEST = 'ethereum/GET_RATE_REQUEST';
const GET_RATE_SUCCESS = 'ethereum/GET_RATE_SUCCESS';
const GET_RATE_FAILURE = 'ethereum/GET_RATE_FAILURE';

// -- Actions --------------------------------------------------------------- //
export const ethereumGetRate = () => dispatch => {
  dispatch({ type: GET_RATE_REQUEST });
  apiGetRate()
    .then(({ data }) => {
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({ type: GET_RATE_FAILURE });
    });
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  rates: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RATE_REQUEST:
      return { ...state, fetching: true };
    case GET_RATE_SUCCESS:
      return {
        ...state,
        fetching: false,
        rates: action.payload
      };
    case GET_RATE_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
