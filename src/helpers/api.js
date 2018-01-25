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
