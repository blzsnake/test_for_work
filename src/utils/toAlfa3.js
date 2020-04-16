/**
 * Returns ISO-3166-1 alfa 3
 *
 * @param {String}  alfa2 string value.
 * @return {String} alfa3.
 */

const ALFA3_DICTIONARY = {
  rus: 'ru',
  eng: 'en',
  esp: 'es',
};

export default (alfa2 = '') => ALFA3_DICTIONARY[alfa2.toLowerCase()];
