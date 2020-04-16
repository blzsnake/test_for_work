import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import s from './styles.less';

const ContractTotal = props => (
  <div className={classNames({
    [s.total]: true,
    [s.total_active]: props.active,
    })}>
    <div className={s.totalText}>
      <FormattedMessage id={props.name} />
    </div>
    <div className={s.totalNumber}>
      {`${props.number} €`}
    </div>
  </div>
);

export default ContractTotal;
