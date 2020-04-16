import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'ghofi-react-components';


import s from './styles.less';

/**
 * @param  {string} {title=''
 * @param  {array} texts=[]}
 */

const Hint = ({ texts = [] }) => (
  <div className={s.hint}>
    <div className={s.hint__title}>
      <Text
        size={36}
        sizeTablet={24}
        isThreeSixB >
        <FormattedMessage id='connections_control_hint_title' />
      </Text>
    </div>
    <div className={s.hint__texts}>
      {texts.map((text, index) => (
        <Text
          size={18}
          sizeTablet={16}
          tagName='p'>
          <FormattedMessage id={`connections_control_hint_text_${index + 1}`} />
        </Text>))}
    </div>
  </div>
);

export default Hint;
