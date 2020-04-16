import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import s from './styles.less';

const ContractSubscription = props => (
  <div className={s.subsciption}>
    <div className={classNames({
      [s.subsciptionItem]: true,
      [s.subsciptionItem_active]: true,
    })}>
      <FormattedMessage id='contracts_pay_type' />
    </div>
    <div className={classNames({
      [s.subsciptionItem]: true,
      [s.subsciptionItem_active]: !props.checked,
    })}>
      <FormattedMessage id='contracts_pay_type_month' />
    </div>
    <div className={classNames({
      [s.subsciptionItem]: true,
      [s.subsciptionItem_active]: props.checked,
    })}>
      <FormattedMessage id='contracts_pay_type_year' />
    </div>
    <div className={s.subsciptionToggler}>
      <label
        htmlFor='subsToggler'
        className={classNames({
          [s.subsciptionLabel]: true,
          [s.subsciptionLabel_checked]: props.checked,
        })}>
        <input
          id='subsToggler'
          type='checkbox'
          name='subsToggler'
          onChange={props.onChange}
          className={s.subsciptionField} />
      </label>
    </div>
  </div>
);

export default ContractSubscription;
