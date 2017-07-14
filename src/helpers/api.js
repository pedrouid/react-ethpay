import axios from 'axios';

/**
 * Configuration for  api instance
 * @type axios instance
 */
const api = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

/**
 * @desc Bitcoin Average Ticker Data
 * @param {String} [code='USD']
 * @return {Promise}
 */
export const apiGetRate = (code = 'USD') =>
  api.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC${code}`);


/**
 * @desc Bitoin Average Historical Data
 * @param {String} [code='USD']
 * @return {Promise}
 */
export const apiGetHistory = (code = 'USD', period = 'monthly') =>
  api.get(`https://apiv2.bitcoinaverage.com/indices/global/history/BTC${code}?period=${period}`);
