import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Container } from 'ghofi-react-components';

import MENU from './constants';

import s from './styles.less';

const makeMenu = (menu = []) => (
  <nav className={s.menu} >
    { menu.map(item => (<a href={item.href} className={s.item}>{item.value}</a>)) }
  </nav>
);

const FooterPure = () => (
  <section className={s.footer} >
    <Container wide >
      <div className={s.wrapper}>
        {/* <FormattedMessage id='footer_address'>
        {msg => (msg !== 'footer_address' ? <div className={s.address}>
          <Text
            size={16}
            fontInherit
          >
            {msg}
          </Text>
        </div> : null)}
      </FormattedMessage> */}
        <div className={s.copyright}>
          <Text
            size={16}
            fontInherit>
            <FormattedMessage id='footer_copyright' />
          </Text>
        </div >
        { makeMenu(MENU) }
      </div >
    </Container >
  </section >
);

export default FooterPure;
