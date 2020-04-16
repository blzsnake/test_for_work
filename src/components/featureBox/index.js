import React from 'react';
import classNames from 'classnames';

import s from './styles.less';

const FeatureBox = props => (
  <div className={s.featureBox}>
    <label
      htmlFor={props.id}
      className={classNames({
        [s.label]: true,
        [s.label_checked]: props.checked,
      })}>
      <input
        id={props.id}
        type='checkbox'
        name={props.name}
        onChange={props.onChange}
        className={s.field} />
    </label>
  </div>
);

export default FeatureBox;
