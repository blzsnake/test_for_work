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
const validDateSelector = createSelector(
  prop('validDate'),
  validDate => validDate,
);
const freePinQuantitySelector = createSelector(
  prop('freePinQuantity'),
  freePinQuantity => freePinQuantity,
);

export default ({ pins, languages, personal, finance }) => ({
  localization: localizationSelector(languages),
  name: nameSelector(personal),
  pinQuantity: pinQuantitySelector(pins),
  freePinQuantity: freePinQuantitySelector(pins),
  validDate: validDateSelector(finance),
});
