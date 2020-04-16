import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import TariffsPure from './TariffsPure';

class Contracts extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
  }

  render() {
    return (
      <TariffsPure
        tariffs={this.props.tariffs}
        isTablet={this.props.isTablet}
      />
    );
  }
}

export default connect(
  ({ tariffs, languages, utils }) => ({
    localization: languages.translate,
    tariffs: tariffs.tariffs,
    isTablet: utils.isTablet,
  }),
)(Contracts);
