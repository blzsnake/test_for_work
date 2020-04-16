import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import getUsersPinsList from '../../actions/getUserPinsList';
import ConnectionsPure from './ConnectionsPure';
import mapStateToProps from './mappers';

class Connections extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    pinQuantity: pt.number.isRequired,
    freePinQuantity: pt.number.isRequired,
    clientId: pt.number.isRequired,
    getUsersPinsList: pt.func.isRequired,
  }

  state = {
    isControlOpened: false,
  }

  componentDidMount() {
    // this.props.getUsersPinsList({ client_id: this.props.clientId });
  }

  handleControlsShow = () => this.setState({ isControlOpened: !this.state.isControlOpened });

  render() {
    return (
      <ConnectionsPure
        name={this.props.name}
        pinQuantity={this.props.pinQuantity}
        pinFree={this.props.freePinQuantity}
        controlsShow={this.handleControlsShow}
        isControlOpened={this.state.isControlOpened} />
    );
  }
}

export default connect(mapStateToProps, { getUsersPinsList })(Connections);
