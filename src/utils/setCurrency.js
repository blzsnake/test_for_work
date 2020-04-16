/**
 * Returns currency
 *
 * @param {String}  alfa2 string value.
 * @return {String} alfa3.
 */

const CURRENCY_DICTIONARY = {
  978: '€',
  840: '$',
  810: '₽',
};

export default (currency = '') => CURRENCY_DICTIONARY[currency.toLowerCase()];
