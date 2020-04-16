import React from 'react';
import { shallow } from 'enzyme';

import Pins from '../Pins';

const props = {
  pins: ['string'],
  onPinClick: () => {},
};

describe('Should render', () => {
  it('Pins render', () => {
    const component = shallow(<Pins {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
