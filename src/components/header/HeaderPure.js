import React from 'react';
import { Text } from 'ghofi-react-components';
import Dropdown from '../dropdown';

import s from './styles.less';

const HeaderPure = ({ langs = ['EN', 'ES', 'RU'], onChange, locale = 'ESP', onOut, auth }) => (
  <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.logo}>
        <Text
          size={45}
          font='f_threesix_b'
          lineHeight={1}>
            GhoFi
        </Text>
      </div>
      <nav className={s.menu}>
        <div className={s.language}>
          <Dropdown
            className={s.select}
            options={langs}
            mod='langs'
            onChange={onChange}
            value={locale}
            placeholder='Select an option' />
        </div>
        {auth && <div
          role='button'
          tabIndex={0}
          onKeyDown={onOut}
          onClick={onOut}
          className={s.exit} />}
      </nav>
    </div>
  </header>
);

export default HeaderPure;
