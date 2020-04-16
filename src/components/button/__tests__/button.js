import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

const props = {
  tagName: 'button',
  type: 'button',
};

describe('Should render', () => {
  it('Button render', () => {
    const component = shallow(<Button {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
