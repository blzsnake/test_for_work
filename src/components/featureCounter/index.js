import React from 'react';
import classNames from 'classnames';

import s from './styles.less';

const FeatureCounter = props => (
  <div className={classNames({
    [s.counter]: true,
    [s.counter_checked]: props.checked,
  })}>
    <input
      id={props.id}
      type='text'
      name={props.name}
      onChange={props.onChange}
      onClick={props.onClick}
      className={s.field}
      value={props.value} />
    <div
      onKeyDown={props.onIncrement}
      role='button'
      tabIndex={0}
      className={s.inc}
      onClick={props.onIncrement} />
    <div
      onKeyDown={props.onDecrement}
      role='button'
      tabIndex={0}
      className={s.dec}
      onClick={props.onDecrement} />
  </div>
);

export default FeatureCounter;
