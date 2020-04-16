import { createSelector } from 'reselect';
import { findFreePins, findBusyPins, makePinsList } from '../utils/reducerUtils';

const pinsListSelector = createSelector(
  ({ list }) => list,
  list => makePinsList(list),
);
const freePinsSelector = createSelector(
  pinsList => pinsList,
  (pinsList = []) => findFreePins(pinsList),
);
const freePinQuantitySelector = createSelector(
  pinsList => pinsList,
  (pinsList = []) => (findFreePins(pinsList) && findFreePins(pinsList).length) || 0,
);
const connectedPinsSelector = createSelector(
  pinsList => pinsList,
  (pinsList = []) => findBusyPins(pinsList),
);


export const PinsState = {
  pinsList: [],
  pinQuantity: 0,
  freePins: [],
  freePinQuantity: 0,
  connectedPins: 0,
};

export default function reducer(state = PinsState, action) {
  if (action.type === 'GET_USER_PINS') {
    const pinsList = pinsListSelector(action.payload);

    return {
      ...state,
      pinsList,
      pinQuantity: pinsList.length,
      freePins: freePinsSelector(pinsList),
      freePinQuantity: freePinQuantitySelector(pinsList),
      connectedPins: connectedPinsSelector(pinsList),
    };
  }

  return state;
}
