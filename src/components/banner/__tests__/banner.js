import React from 'react';
import { shallow } from 'enzyme';

import BannerPure from '../BannerPure';

const props = {
  freePinQuantity: 11,
  name: 'Mark Yuliy Cesar',
  pinQuantity: 12,
  validDate: '2019.01.24',
  onMenuClick: () => {},
};

describe('Should render', () => {
  it('BannerPure render', () => {
    const banner = shallow(<BannerPure {...props} />);

    expect(banner).toBeDefined();
    expect(banner).toMatchSnapshot();
  });
});
