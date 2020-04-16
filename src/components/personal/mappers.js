/* eslint-disable camelcase */
import { prop } from 'ramda';
import { createSelector } from 'reselect';

const localizationSelector = createSelector(
  prop('translate'),
  translate => translate,
);
const listSelector = createSelector(
  prop('contactList'),
  contactList => contactList,
);
const tokenSelector = createSelector(
  prop('token'),
  token => token,
);
const idSelector = createSelector(
  prop('client_id'),
  client_id => client_id,
);

export default ({ user, languages, personal }) => ({
  localization: localizationSelector(languages),
  list: listSelector(personal),
  token: tokenSelector(user),
  id: idSelector(user),
});
