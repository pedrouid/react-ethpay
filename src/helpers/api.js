import axios from 'axios';
import firebase from 'firebase';

/**
 * Configuration for  api instance
 * @type axios instance
 */
const api = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

/**
 * @desc Ethereum Rates
 * @param {String} [native='BTC,USD,EUR,GBP']
 * @return {Promise}
 */
export const apiGetRate = (native = 'BTC,USD,EUR,GBP') =>
  api.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=${native}`);

/**
 * @desc validate and signin user session
 * @param  {String} [email='']
 * @param  {String} [password='']
 * @return {Promise}
 */
export const apiSignin = (email = '', password = '') =>
  firebase.auth().signInWithEmailAndPassword(email, password);

/**
 * @desc signup new user
 * @param  {String} [email='']
 * @param  {String} [password='']
 * @return {Promise}
 */
export const apiSignup = (email = '', password = '') =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

/**
 * @desc signout authed user session
 * @return {Promise}
 */
export const apiSignout = () => firebase.auth().signOut();
