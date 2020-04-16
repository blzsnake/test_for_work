import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, Text, Container, Button } from 'ghofi-react-components';

import s from './styles.less';

const LoginFormPure = ({ type, onChoose, onChange, onAuth, error }) => (
  <div id='loginForm' className={s.loginForm}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='footer_link_lk' />
        </Text>
      </div>
      {/* <div className={s.choose}>
        {/* <div className={s.button}>
          <Button
            id='pinButton'
            onClick={onChoose('pin')}
            color={type === 'pin' ? 'yellow' : null}
            wide>
            <Text
              size={14}
              uppercase
              fontInherit>
              <FormattedMessage id='enter_with_pin' />
            </Text>
          </Button>
        </div>
        <div className={s.button}>
          <Button
            id='wwpassButton'
            onClick={onChoose('wwpass')}
            color={type === 'wwpass' ? 'yellow' : null}
            wide>
            <Text
              size={14}
              uppercase
              fontInherit>
              <FormattedMessage id='enter_with_wwpass' />
            </Text>
          </Button>
        </div>
      </div> */}
      {/* {type === 'pin' &&
        <div className={s.pinSubmit}>
          <div className={s.pin}>
            <Field
              name='pin'
              placeholder='PIN'
              onChange={onChange}
              error={error}
              wide />
          </div>
          <div className={s.button}>
            <Button
              id='loginButton'
              onClick={onAuth}
              wide>
              <Text
                size={14}
                uppercase
                fontInherit>
                <FormattedMessage id='enter_lk' />
              </Text>
            </Button>
          </div>
        </div>} */}
      <div className={s.pinSubmit}>
        <div className={s.pin}>
          <Field
            name='login'
            placeholder='Login'
            onChange={event => onChange(event, 'login')}
            error={error}
            wide />
        </div>
        <div className={s.pin}>
          <Field
            name='password'
            placeholder='Password'
            type='password'
            onChange={event => onChange(event, 'password')}
            error={error}
            wide />
        </div>
        <div className={s.button}>
          <Button
            id='loginButton'
            onClick={onAuth}
            wide>
            <Text
              size={14}
              uppercase
              fontInherit>
              <FormattedMessage id='enter_lk' />
            </Text>
          </Button>
        </div>
      </div>
      {type === 'wwpass' && <div id='qrcode' className={s.qrcode} />}
      {error &&
      <div className={s.error}>
        <Text
          size={16}
          color='red'
          align='center'
          fontInherit>
          {error}
        </Text>
      </div>}
    </Container>
  </div>
);

export default LoginFormPure;
