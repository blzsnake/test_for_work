import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Text, Button } from 'ghofi-react-components';
import ConnectionsControl from '../connectionsControl';

import s from './styles.less';

const ConnectionsPure = props => (
  <section id='connections' className={s.connections}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='connections_title' />
        </Text>
      </div>
      <div className={s.subtitle}>
        <Text
          size={20}
          sizeTablet={16}>
          <FormattedMessage
            id='connections_text'
            values={{
              name: props.name,
              pinQuantity: props.pinQuantity,
              pinFree: props.pinFree,
            }} />
        </Text>
      </div>
      <div className={s.button}>
        <Button
          id='connectionsButton'
          color={props.isControlOpened ? 'yellow' : null}
          onClick={props.controlsShow}
          wide>
          <Text
            size={14}
            uppercase
            fontInherit>
            <FormattedMessage id='connections_button' />
          </Text>
        </Button>
      </div>
      {props.isControlOpened &&
      <div className={s.controls}>
        <ConnectionsControl />
      </div>}
    </Container>
  </section>
);

export default ConnectionsPure;
