/* eslint-disable camelcase */
import { prop, pathOr } from 'ramda';
import { createSelector } from 'reselect';

const localizationSelector = createSelector(
  prop('translate'),
  translate => translate,
);
const nameSelector = createSelector(
  prop('name'),
  name => name,
);
const phoneSelector = createSelector(
  prop('phone'),
  phone => phone,
);
const idSelector = createSelector(
  prop('client_id'),
  client_id => client_id,
);
const mediaSelector = createSelector(
  prop('isTablet'),
  isTablet => isTablet,
);
const invoicesSelector = createSelector(
  prop('invoices'),
  invoices => invoices,
);
const ordersNoPayedSelector = createSelector(
  prop('ordersNoPayed'),
  ordersNoPayed => ordersNoPayed,
);
const ordersPayedSelector = createSelector(
  prop('ordersPayed'),
  ordersPayed => ordersPayed,
);
const validDateSelector = createSelector(
  prop('validDate'),
  validDate => validDate,
);
const localeSelector = createSelector(
  prop('locale'),
  locale => locale,
);

export default ({ user, languages, finance, utils, personal }) => ({
  localization: localizationSelector(languages),
  name: nameSelector(personal),
  clientId: idSelector(user),
  phone: pathOr('', ['contact_list', 0, 'phone'], personal),
  isTablet: mediaSelector(utils),
  invoices: invoicesSelector(finance),
  ordersNoPayed: ordersNoPayedSelector(finance),
  ordersPayed: ordersPayedSelector(finance),
  payments: ordersPayedSelector(finance),
  validDate: validDateSelector(finance),
  locale: localeSelector(languages),
});
