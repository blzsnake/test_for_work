import React from 'react';
import { shallow } from 'enzyme';

import Connections from '../ConnectionsPure';

const props = {
  name: 'xxx',
  pinQuantity: 2,
  pinFree: 2,
};

describe('Should render', () => {
  it('Connections render', () => {
    const component = shallow(<Connections {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
