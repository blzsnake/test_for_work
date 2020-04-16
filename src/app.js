/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import config from 'kit/config';

/* App */
import languageReducer from 'reducers/language';
import userReducer from 'reducers/user';
import tariffsReducer from 'reducers/tariffs';
import constructorReducer from 'reducers/constructor';
import personalReducer, { PersonalState } from 'reducers/personal';
import utilsReducer from 'reducers/utils';
import configReducer from 'reducers/config';
import financeReducer, { FinancialState } from 'reducers/finance';
import pinsReducer, { PinsState } from 'reducers/pins';
import Main from 'pages/main';
import './styles.global.less';


const CONSTRUCTOR_INIT = {
  features: {
    inet: true,
  },
  counter: {
    pin: 1,
    video: 1,
    phone: 1,
    mobile: 1,
    guest: 1,
    inet: 1,
  },
  annual: false,
};

config.addReducer('languages', languageReducer, { list: [] });
config.addReducer('user', userReducer, { authorize: false });
config.addReducer('tariffs', tariffsReducer, { prices: [] });
config.addReducer('constructor', constructorReducer, CONSTRUCTOR_INIT);
config.addReducer('personal', personalReducer, PersonalState);
config.addReducer('utils', utilsReducer, {});
config.addReducer('config', configReducer, {
  region: process.env.REGION,
});
config.addReducer('finance', financeReducer, FinancialState);
config.addReducer('pins', pinsReducer, PinsState);

config.enableGraphQLServer();
if (SERVER) {
  config.setGraphQLSchema(require('src/graphql/schema').default);

  config.getKoaApp(app => {
    app.context.engine = 'ReactQL';
    app.on('error', e => {
      console.error('Server error:', e);
    });
  });
}

export default Main;
