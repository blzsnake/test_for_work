import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import unbindPinToMac from '../../actions/unbindPinToMac';
import ConnectionsControlPure from './ConnectionsControlPure';

class ConnectionsControl extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    id: pt.string.isRequired,
    pinQuantity: pt.number.isRequired,
    freePinQuantity: pt.number.isRequired,
  }

  state = {
    isHintShow: false,
    popupIsOpen: false,
    cancelPinPopupIsOpen: false,
    deviceEditing: false,
    formInitialValues: {},
    values: {},
  }

  handleHintShow = () => this.setState({ isHintShow: !this.state.isHintShow });

  handlePopupControl = (data, isEditing) => () =>
    this.setState({ popupIsOpen: true, formInitialValues: data, deviceEditing: isEditing });

  handleCancelPinPopupControl = data =>
    () => this.setState({ cancelPinPopupIsOpen: true, formInitialValues: data });

  handleClosePopup = event => {
    if (event.target && event.target.dataset && event.target.dataset.action === 'close') {
      this.setState({ popupIsOpen: false, cancelPinPopupIsOpen: false, formInitialValues: {} });
    }
  }

  handleClosePopupOnBtn = () =>
    this.setState({
      popupIsOpen: false,
      cancelPinPopupIsOpen: false,
      formInitialValues: {},
      values: {},
    })

  handleChangeForm = event => this.setState({
    values: {
      ...this.state.values,
      [event.target.name]: event.target.value,
    },
  })

  handleTypeChange = arg => this.setState({
    values: {
      ...this.state.values,
      type: arg.value,
    },
  })

  handleCleanPin = pin => () =>
    this.props.unbindPinToMac(
      { pin, client_id: this.props.id, content: this.props.localization.notify_cleane_pin },
    ) ||
    this.handleClosePopupOnBtn()

  render() {
    return (
      <ConnectionsControlPure
        isControlOpened={this.state.isControlOpened}
        toggleHintShow={this.handleHintShow}
        isHintShow={this.state.isHintShow}
        connectedPins={this.props.connectedPins}
        freePins={this.props.freePins}
        ipTable={this.props.ipTable}
        name={this.props.name}
        pinQuantity={this.props.pinQuantity}
        pinFree={this.props.freePinQuantity}
        freePinQuantity={this.props.freePinQuantity}
        isTablet={this.props.isTablet}
        popupState={this.state.popupIsOpen}
        cancelPinPopupOpen={this.state.cancelPinPopupIsOpen}
        popupControlHandler={this.handlePopupControl}
        cancelPinPopupControlHandler={this.handleCancelPinPopupControl}
        onPopupClose={this.handleClosePopup}
        btnClose={this.handleClosePopupOnBtn}
        onChangeForm={this.handleChangeForm}
        onChangeType={this.handleTypeChange}
        formInitialValues={this.state.formInitialValues}
        values={this.state.values}
        onCleanPin={this.handleCleanPin}
        clientId={this.props.id}
        deviceEditing={this.state.deviceEditing} />
    );
  }
}

export default connect(
  ({ user, languages, utils, personal, pins }) => ({
    localization: languages.translate,
    connectedPins: pins.connectedPins,
    freePins: pins.freePins,
    ipTable: user.ipTable,
    id: user.client_id,
    isTablet: utils.isTablet,
    name: personal.name,
    pinQuantity: pins.pinQuantity,
    freePinQuantity: pins.freePinQuantity,
  }), { unbindPinToMac },
)(ConnectionsControl);
