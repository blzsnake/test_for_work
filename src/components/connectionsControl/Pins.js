/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'ghofi-react-components';

import s from './styles.less';

/**
 * @param  {} {pins=[]}
 */

const Pins = ({ pins = [], onPinClick, client_id }) => (
  <ul className={s.pins} >
    {
      pins.map(item => (
        <li
          className={s.pins__item}
          onKeyDown={onPinClick({ pin: String(item), client_id, name: '', mac: '', type: '' })}
          onClick={onPinClick({ pin: String(item), client_id, name: '', mac: '', type: '' })}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role='button'
          tabIndex={0} >
          <Text
            size={16}
            sizeTablet={14}
            uppercase >
            {item}
          </Text>
        </li>))
    }
    {/* <li className={s.pins__add}>
      <Button
        wide
        color='yellow'>
        <Text
          size={14}
          fontInherit
          uppercase >
          <FormattedMessage id='connections_control_pins' />
        </Text>
      </Button>
    </li> */}
  </ul>
);

export default Pins;
