import React from 'react';
import { shallow } from 'enzyme';

import ConnectionsControl from '../ConnectionsControlPure';

const props = {
  freePinQuantity: 11,
  name: 'Mark Yuliy Cesar',
  pinQuantity: 2,
  pinFree: 2,
  isOpen: true,
  onCleanPin: () => {},
  formInitialValues: {
    pin: 1,
    mac: 1,
  },
};

describe('Should render', () => {
  it('ConnectionsControl render', () => {
    const component = shallow(<ConnectionsControl {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
