import { prop } from 'ramda';
import { createSelector } from 'reselect';

const localizationSelector = createSelector(
  prop('translate'),
  translate => translate,
);
const tokenSelector = createSelector(
  prop('token'),
  token => token,
);
const authSelector = createSelector(
  prop('authorize'),
  authorize => authorize,
);
const localeSelector = createSelector(
  prop('locale'),
  locale => locale,
);

export default ({ user, languages, config }) => ({
  localization: localizationSelector(languages),
  locale: localeSelector(languages),
  token: tokenSelector(user),
  authorize: authSelector(user),
  config,
});
