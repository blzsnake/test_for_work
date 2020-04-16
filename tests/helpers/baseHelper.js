/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
class BaseHelper extends codecept_helper {
  authByPin(pin, I) {
    I.click('#pinButton');
    I.fillField('pin', pin);
    I.click('#loginButton');
  }
}

module.exports = BaseHelper;
