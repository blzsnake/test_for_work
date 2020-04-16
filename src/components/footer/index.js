/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Text, Footer } from 'ghofi-react-components';

import MENU from './constants';

class FooterContainer extends PureComponent {
  render() {
    return (
      <Footer
        address={null}
        copyright={
          <Text
            size={16}
            fontInherit>
            <FormattedMessage id='footer_copyright' />
          </Text>}
        menu={MENU} />
    );
  }
}

export default connect(
  ({ languages }) => ({
    localization: languages.translate,
  }),
)(FooterContainer);
