import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button, Popup } from 'ghofi-react-components';

import Device from './Device';
import Hint from './Hint';
import Pins from './Pins';
import ConnectionsControlForm from '../connectionsControlForm';

import { HINT } from './constants';

import s from './styles.less';


const makeFreePins = (pins = []) => pins.map(item => item.pin);
// const makeTableData = (table = []) => {
//   TABLE.table.rows = table.reduce(
//     (memo, item, index) => ([...memo, [index + 1, item.IP, item.MAC, 1]]), []
//   );
//   return ({
//     ...TABLE,
//   });
// };

const makeDevicesList = (devices = [], handleClick, handleCancelPinClick, clientId) => (
  <ul className={s.list}>
    {devices.map(item => (
      <li className={s.item}>
        <Device
          {...item}
          id={clientId}
          handleClick={handleClick}
          handleCancelPinClick={handleCancelPinClick} />
      </li>))}
  </ul>);

const ConnectionsControlPure = props => (
  <div id='connectionsControl' className={s.connectionsControls}>
    <div className={s.header}>
      <div className={s.title}>
        <Text
          size={36}
          sizeTablet={24}
          isThreeSixB >
          <FormattedMessage id='connections_control_title' />
        </Text>
      </div>
      {/* <Button
        onClick={props.toggleHintShow}
        color={props.isHintShow ? 'yellow' : null}
        value="?"
        menu /> */}
    </div>
    {makeDevicesList(
      props.connectedPins,
      props.popupControlHandler,
      props.cancelPinPopupControlHandler,
      props.clientId
      )}
    {props.isHintShow && <Hint
      title={HINT.title}
      texts={HINT.texts} />}
    <Pins
      pins={makeFreePins(props.freePins)}
      client_id={props.clientId}
      onPinClick={props.popupControlHandler} />
    {/* <CreatePin
      title='Создать PIN'
      text='Используй свои бесплатные дни, чтобы получить больше интернета. У вас 14 дней'
      devices={makeDevicesList(DEVICE_LIST_DISABLED)} />
    <Table
      {...makeTableData(props.ipTable)}
      name={props.name}
      pinQuantity={props.pinQuantity}
      pinFree={props.freePins}
      isTablet={props.isTablet}
      freePinQuantity={props.freePinQuantity}
    /> */}
    <Popup
      size={50}
      tabletSize={70}
      mobileSize={95}
      tinyMobileSize={99}
      title={props.deviceEditing ? <FormattedMessage id='form_edit_pin_title' /> : <FormattedMessage id='form_pin_title' />}
      isOpen={props.popupState}
      onCloseClick={props.onPopupClose}>
      <ConnectionsControlForm
        initialValues={props.formInitialValues}
        values={props.values}
        deviceEditing={props.deviceEditing}
        onCloseClick={props.btnClose}
        onChangeForm={props.onChangeForm}
        onChangeType={props.onChangeType} />
    </Popup>
    <Popup
      size={50}
      title={<FormattedMessage id='cancel_pin_title' />}
      isOpen={props.cancelPinPopupOpen}
      onCloseClick={props.onPopupClose}>
      <div className={s.popupInfo}>
        <Text
          size={18}
          sizeTablet={12}
          isThreeSixB>
          {`PIN: ${props.formInitialValues.pin}`}
        </Text>
        <Text
          size={18}
          sizeTablet={12}
          isThreeSixB>
          {`MAC: ${props.formInitialValues.mac}`}
        </Text>
      </div>
      <div className={s.popupBtns}>
        <div className={s.button}>
          <Button
            data-action='close'
            wide
            onClick={props.btnClose}>
            <Text size={18}>
              <FormattedMessage
                id='form_pin_cancel' />
            </Text>
          </Button>
        </div>
        <div className={s.button}>
          <Button
            wide
            onClick={props.onCleanPin(props.formInitialValues.pin)}>
            <Text size={18}>
              <FormattedMessage
                id='cancel_pin_btn' />
            </Text>
          </Button>
        </div>
      </div>
    </Popup>
  </div>
);

export default ConnectionsControlPure;
