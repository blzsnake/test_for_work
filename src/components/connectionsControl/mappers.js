import { prop } from 'ramda';
import { createSelector } from 'reselect';

const localizationSelector = createSelector(
  prop('translate'),
  translate => translate,
);
const nameSelector = createSelector(
  prop('name'),
  name => name,
);
const pinQuantitySelector = createSelector(
  prop('pinQuantity'),
  pinQuantity => pinQuantity,
);
const freePinQuantitySelector = createSelector(
  prop('freePinQuantity'),
  freePinQuantity => freePinQuantity,
);
const connectedPinsSelector = createSelector(
  prop('connectedPins'),
  connectedPins => connectedPins,
);
const freePinsSelector = createSelector(
  prop('freePins'),
  freePins => freePins,
);
const isTabletSelector = createSelector(
  prop('isTablet'),
  isTablet => isTablet,
);
const idSelector = createSelector(
  prop('client_id'),
  // eslint-disable-next-line camelcase
  client_id => client_id,
);

export default ({ pins, languages, personal, user, utils }) => ({
  localization: localizationSelector(languages),
  name: nameSelector(personal),
  pinQuantity: pinQuantitySelector(pins),
  freePinQuantity: freePinQuantitySelector(pins),
  id: idSelector(user),
  connectedPins: connectedPinsSelector(pins),
  freePins: freePinsSelector(pins),
  isTablet: isTabletSelector(utils),
});
