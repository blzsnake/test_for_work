import React from 'react';
import { shallow } from 'enzyme';

import Device from '../Device';

const props = {
  freePinQuantity: 11,
  name: 'Mark Yuliy Cesar',
  type: 'string',
  pin: 1,
  mac: 1,
  handleClick: () => {},
  handleCancelPinClick: () => {},
};

describe('Should render', () => {
  it('Device render', () => {
    const component = shallow(<Device {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
