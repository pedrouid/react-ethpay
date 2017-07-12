/**
 * @desc get rate from json
 * @param {Array} [array]
 * @param {String} [code]
 * @return {Session}
 */
export const getRate = (array, code) =>
  array.filter(x => x.code === code);
