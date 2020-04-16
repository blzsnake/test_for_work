import React from 'react';
import { shallow } from 'enzyme';

import Hint from '../Hint';

const props = {
  title: 'Mark Yuliy Cesar',
  texts: ['string'],
};

describe('Should render', () => {
  it('Hint render', () => {
    const component = shallow(<Hint {...props} />);

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
