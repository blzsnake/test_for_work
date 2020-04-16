import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button } from 'ghofi-react-components';

import s from './styles.less';

import mobile from './images/mobile.svg';
import tablet from './images/tab.svg';
import router from './images/router.svg';
import tv from './images/tv.svg';
import pc from './images/pc.svg';
import mobileDisabled from './images/mobile-disabled.svg';
import tabDisabled from './images/tab-disabled.svg';
import routerDisabled from './images/router-disabled.svg';
import tvDisabled from './images/tv-disabled.svg';
import pcDisabled from './images/pc-disabled.svg';

const TYPES_ICO = {
  mobile,
  tablet,
  tv,
  pc,
  notebook: pc,
  router,
  mobileDisabled,
  tabDisabled,
  routerDisabled,
  tvDisabled,
  pcDisabled,
};

/**
 * @param  {string} {name=''
 * @param  {string} type=''
 * @param  {number} pin=0
 * @param  {string} mac=0
 * @param  {bool} disabled}
 */

const Device = ({ name = 'name', type = 'mobile', pin = 0, label = '', mac = '', disabled, handleClick, handleCancelPinClick, id }) => (
  <div className={s.device}>
    <div
      role='button'
      className={s.device__view}
      onKeyDown={handleClick({ pin, mac, name, type, label, client_id: id }, true)}
      onClick={handleClick({ pin, mac, name, type, label, client_id: id }, true)}
      tabIndex={0}>
      <img
        alt={type}
        src={disabled ? TYPES_ICO[`${type}Disabled`] : TYPES_ICO[type]}
        className={s.device__img} />
    </div>
    <div className={s.device__info}>
      <div className={s.device__name}>
        <Text
          size={16}
          sizeTablet={14}
          fontInherit>{name}
        </Text>
      </div>
      {!disabled &&
      <div className={s.device__pin}>
        <Text
          size={16}
          sizeTablet={14}
          fontInherit>{`PIN ${pin}`}
        </Text>
      </div>}
      {!disabled &&
      <div className={s.device__button}>
        <Button
          wide
          onClick={handleCancelPinClick({ pin, mac })}
          mod='device-cancel'
          color='yellow'>
          <Text
            size={11}
            uppercase
            fontInherit>
            <FormattedMessage id='connections_control_button' />
          </Text>
        </Button>
      </div>}
    </div>
  </div>
);

export default Device;
