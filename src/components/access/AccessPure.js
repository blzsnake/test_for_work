/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Button, Text } from 'ghofi-react-components';


import apple from './images/applepay.svg';
import google from './images/google-play.svg';

import s from './styles.less';

const AccessPure = props => (
  <section id='access' className={s.access}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage
            id='access_title'
            values={{
              name: props.name,
            }} />
        </Text>
      </div>
      <div className={s.subtitle}>
        <Text
          size={20}
          sizeTablet={16}>
          <FormattedMessage
            id='access_text'
            values={{
              name: props.name,
            }} />
        </Text>
      </div>
      <div className={s.button}>
        <Button
          wide
          onClick={props.toggleBlock}>
          <Text
            size={14}
            uppercase
            fontInherit>
            WWpass
          </Text>
        </Button>
      </div>
      {props.wwpass &&
      <div className={s.description}>
        <Text
          size={16}
          tagName='p'>
        To enable two-factor account authentication just install the App
          <Text
            size={16}
            tagName='span'
            color='black' >
            &nbsp;WWPass PassKey Lite&nbsp;
          </Text>
        on your mobile phone or tablet, register in the system and you will can scan the QR
        code displayed on the screen. From this time to log on to your account you should just scann
        the QR code with WWPassKey Lite logon page and you will be redirected to
        the profile page atomatically.
          <Text
            size={16}
            tagName='span'
            color='red'>
            &nbsp;Authentication with PIN will be disabled.
          </Text>
        </Text>
        <div className={s.wrapper}>
          <div id='qrcode' className={s.qrcode} />
          <div className={s.info}>
            <Text
              size={16}
              tagName='p'>
              If you want to disable WWPass authentication just
              <a
                href='#'
                className={s.link}>
                &nbsp;click here.
              </a>
            </Text>
            <div className={s.apps}>
              <img
                src={apple}
                alt='apple'
                className={s.apple} />
              <img
                src={google}
                alt='google'
                className={s.google} />
            </div>
          </div>
        </div>
      </div>}
    </Container>
  </section>
);

export default AccessPure;
