import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import ContractsPure from './ContractsPure';

class Contracts extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
  }

  state = {
    showConstructor: false,
  }

  handleToggleConstuctor = () => this.setState({
    showConstructor: !this.state.showConstructor,
  });

  render() {
    return (
      <ContractsPure
        name={this.props.name}
        pinQuantity={this.props.pinQuantity}
        freePin={this.props.freePinQuantity}
        showConstructor={this.state.showConstructor}
        toggleConstructor={this.handleToggleConstuctor} />
    );
  }
}

export default connect(
  ({ personal, languages, pins }) => ({
    localization: languages.translate,
    name: personal.name,
    pinQuantity: pins.pinQuantity,
    freePinQuantity: pins.freePinQuantity,
  }),
)(Contracts);
