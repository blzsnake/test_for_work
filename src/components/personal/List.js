import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { SmartField } from 'ghofi-react-components';

import s from './styles.less';

const renderItem = ({ name = '', phone = '', email, sex }, index, onChange, onChangeIcon) => (
  <li className={s.list__item}>
    <div className={classnames({
      [s.list__name]: true,
      [s.list__name_woman]: sex === 'woman',
      })}>
      <div className={s.list__toggle}>
        <div
          className={s.list__toggleUp}
          onClick={onChangeIcon(index)}
          onKeyDown={onChangeIcon(index)}
          tabIndex={0}
          role='button' />
        <div
          className={s.list__toggleDown}
          onClick={onChangeIcon(index)}
          onKeyDown={onChangeIcon(index)}
          tabIndex={0}
          role='button' />
      </div>
      <FormattedMessage id='personal_list_fio'>
        {msg => (<SmartField
          onChange={event => (event.target ? onChange(index, 'name', event.target.value) : '')}
          className={s.list__field}
          value={name}
          mod='contact'
          placeholder={msg} />)}
      </FormattedMessage>
    </div>
    <div className={s.list__phone}>
      <FormattedMessage id='personal_list_phone'>
        {msg => (<SmartField
          className={s.list__field}
          mask='+999999999999'
          onChange={value => onChange(index, 'phone', value)}
          value={phone}
          mod='contact'
          placeholder={msg} />)}
      </FormattedMessage>
    </div>
    <div className={s.list__email}>
      <FormattedMessage id='personal_list_email'>
        {msg => (<SmartField
          onChange={event => (event.target ? onChange(index, 'email', event.target.value) : '')}
          className={s.list__field}
          value={email}
          mod='contact'
          placeholder={msg} />)}
      </FormattedMessage>
    </div>
  </li>
);

const List = ({ list = [], onChange, onChangeIcon }) => (
  <ul className={s.list}>
    {list.map((item, index) => renderItem(item, index, onChange, onChangeIcon))}
  </ul>
);

export default List;
