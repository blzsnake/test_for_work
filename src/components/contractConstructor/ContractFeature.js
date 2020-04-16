import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import FeatureBox from '../featureBox';
import FeatureCounter from '../featureCounter';
import ContractSubscription from './ContractSubscription';

import s from './styles.less';

const ContractFeature = props => (
  <div className={classNames({
    [s.feature]: true,
    [s.feature_active]: props.checked,
    })}>
    <div className={classNames({
      [s.box]: true,
      [s.isHidden]: !props.checkbox,
      })}>
      <FeatureBox
        checked={props.checked}
        onChange={props.onChange} />
    </div>
    <div className={classNames({
      [s.icon]: true,
      [s[`icon_type_${props.icon}`]]: props.icon,
    })} />
    <div className={s.name}>
      <FormattedMessage id={props.name} />
    </div>
    {props.modificator === 'field' ?
      <div className={s.counter}>
        <FeatureCounter
          checked={props.checked}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          value={props.counter || 1} />
      </div> :
      <ContractSubscription
        checked={props.annual}
        onChange={props.onSubscriptionChange} />}
    <div className={s.price}>{`${props.price * props.counter} €`}</div>
  </div>
);

export default ContractFeature;
