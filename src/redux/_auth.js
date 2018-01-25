import { apiSignin, apiSignup, apiSignout } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //

const SIGN_IN_REQUEST = 'auth/SIGN_IN_REQUEST';
const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE = 'auth/SIGN_IN_FAILURE';

const SIGN_UP_REQUEST = 'auth/SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'auth/SIGN_UP_FAILURE';

const SIGN_OUT_REQUEST = 'auth/SIGN_OUT_REQUEST';
const SIGN_OUT_SUCCESS = 'auth/SIGN_OUT_SUCCESS';
const SIGN_OUT_FAILURE = 'auth/SIGN_OUT_FAILURE';

const UPDATE_EMAIL = 'auth/UPDATE_EMAIL';
const UPDATE_PASSWORD = 'auth/UPDATE_PASSWORD';
const UPDATE_CONFIRM = 'auth/UPDATE_CONFIRM';

const CLEAR_EMAIL = 'auth/CLEAR_EMAIL';
const CLEAR_PASSWORDS = 'auth/CLEAR_PASSWORDS';

// -- Actions --------------------------------------------------------------- //
export const authSignin = (email, password) => dispatch => {
  dispatch({ type: SIGN_IN_REQUEST });
  apiSignin(email, password)
    .then(user => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      dispatch({ type: SIGN_IN_FAILURE });
    });
};

export const authSignup = (email, password) => dispatch => {
  dispatch({ type: SIGN_UP_REQUEST });
  apiSignup(email, password)
    .then(user => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAILURE });
    });
};

export const authSignout = () => dispatch => {
  dispatch({ type: SIGN_OUT_REQUEST });
  apiSignout()
    .then(user => {
      dispatch({
        type: SIGN_OUT_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      dispatch({ type: SIGN_OUT_FAILURE });
    });
};

export const authUpdateEmail = email => ({ type: UPDATE_EMAIL, payload: email });
export const authUpdatePassword = password => ({ type: UPDATE_PASSWORD, payload: password });
export const authUpdateConfirm = confirm => ({ type: UPDATE_CONFIRM, payload: confirm });

export const authClearEmail = () => ({ type: CLEAR_EMAIL });
export const authClearPasswords = () => ({ type: CLEAR_PASSWORDS });

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  email: '',
  password: '',
  confirm: '',
  session: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case SIGN_OUT_REQUEST:
      return { ...state, fetching: true };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        fetching: false,
        session: action.payload
      };
    case SIGN_OUT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return { ...state, fetching: false, session: {} };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case UPDATE_CONFIRM:
      return { ...state, confirm: action.payload };
    case CLEAR_EMAIL:
      return { ...state, email: '' };
    case CLEAR_PASSWORDS:
      return { ...state, password: '', confirm: '' };
    default:
      return state;
  }
};
