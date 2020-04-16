import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button, Container } from 'ghofi-react-components';

import ContractConstructor from '../contractConstructor';

import s from './styles.less';

const ContractsPure = props => (
  <section id='contracts' className={s.contracts}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='contracts_title' />
        </Text>
      </div>
      <div className={s.subtitle}>
        <Text
          sizeTablet={16}
          size={20}>
          <FormattedMessage
            id='contracts_text'
            values={{
              name: props.name,
              payDate: props.payDate || '11.11.11',
              payMonthly: props.payMonthly || 0,
              pinQuantity: props.pinQuantity,
              pinFree: props.freePinQuantity,
              pinGuests: props.pinGuests || 0,
              pinGuestTime: props.pinGuestTime || 0,
            }} />
        </Text>
      </div>
      <div className={s.button}>
        <Button
          wide
          color={props.showConstructor ? 'yellow' : null}>
          <Text
            size={14}
            uppercase
            fontInherit
            onClick={props.toggleConstructor}>
            <FormattedMessage id='contracts_button' />
          </Text>
        </Button>
      </div>
      {props.showConstructor && <ContractConstructor />}
    </Container>
  </section>
);

export default ContractsPure;
