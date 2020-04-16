import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Container, Button } from 'ghofi-react-components';

import CallQuestion from './CallQuestion';
import Drafts from './Drafts';

import { DIALOGS } from './constants';

import s from './styles.less';

const SupportPure = props => (
  <section id='support' className={s.support}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='support_title' />
        </Text>
      </div>
      <div className={s.texts}>
        <Text
          className={s.paragraph}
          tagName='p'
          size={18}
          sizeTablet={16}>
          <FormattedMessage
            id='support_text_1'
            values={{
            name: props.name,
          }} />&nbsp;
          <a
            href='support@ghofi.com'
            className={s.link}>
            support@ghofi.com
          </a>
        </Text>
        <Text
          className={s.paragraph}
          tagName='p'
          size={18}
          sizeTablet={16}>
          <FormattedMessage id='support_text_2_1' />
          <Button
            onClick={props.onToggleQuestion}
            mod='support'>
            <Text
              size={18}
              sizeTablet={16}><FormattedMessage id='support_question' />
            </Text>
          </Button>
          <FormattedMessage id='support_text_2_2' />
        </Text>
        <Text
          className={s.paragraph}
          tagName='p'
          size={18}
          sizeTablet={16}>
          <FormattedMessage id='support_text_3_1' />
          <Button
            onClick={props.onToggleDrafts}
            mod='support'>
            <Text
              size={18}
              sizeTablet={16}><FormattedMessage id='support_draft' />
            </Text>
          </Button>,&nbsp;
          <FormattedMessage id='support_text_3_2' />
        </Text>
      </div>
      {props.questionShow && <CallQuestion
        title='Задать вопрос' />}
      {props.draftsShow && <Drafts
        title='Задать вопрос'
        list={DIALOGS}
        dialogShow={props.dialogShow}
        onToggleDialog={props.onToggleDialog} />}
    </Container>
  </section>
);

export default SupportPure;
