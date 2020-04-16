import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button } from 'ghofi-react-components';

import Select from 'react-select';

import s from './styles.less';

const Question = () => (
  <div className={s.callQuestion}>
    <div className={s.subtitle}>
      <Text
        size={36}
        sizeTablet={24}
        isThreeSixB >
        <FormattedMessage id='support_question' />
      </Text>
    </div>
    <div className={s.choose}>
      <Select
        name='question-choose'
        className={s.select}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]} />
    </div>
    <div className={s.field}>
      <textarea
        name='question'
        className={s.textarea} />
    </div>
    <div className={s.control}>
      <Button wide>
        <Text
          size={14}
          uppercase
          fontInherit>
          <FormattedMessage id='support_send' />
        </Text>
      </Button>
    </div>
  </div>
);

export default Question;
