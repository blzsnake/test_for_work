/* eslint-disable camelcase */

import { pathOr } from 'ramda';
import { createSelector } from 'reselect';

const dataSelector = createSelector(
  ({ payload }) => payload,
  payload => pathOr({}, ['data'], payload),
);


export const PersonalState = {
  contact_list: [],
};

export default function reducer(state = PersonalState, action) {
  if (action.type === 'USER_AUTH_SUCCESS') {
    const data = dataSelector(action);
    const { info } = data;

    return state.merge({
      ...info,
      contactList: info.contact_list,
    });
  }

  return state;
}
