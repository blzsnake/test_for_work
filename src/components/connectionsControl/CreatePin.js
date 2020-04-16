import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button } from 'ghofi-react-components';

import s from './styles.less';

/**
 * @param  {} {title=''
 * @param  {} text=''
 * @param  {} devices}
 */

const CreatePin = ({ devices }) => (
  <div className={s.createPin}>
    <div className={s.createPin__title}>
      <Text
        size={36}
        sizeTablet={24}
        isThreeSixB >
        <FormattedMessage id='create_pin_title' />
      </Text>
    </div>
    <div className={s.createPin__text}>
      <Text
        size={18}
        sizeTablet={16}
        tagName='p'>
        <FormattedMessage id='create_pin_text' />
      </Text>
    </div>
    <div className={s.createPin__add}>
      <div className={s.createPin__addText}><FormattedMessage id='create_pin_add' /></div>&nbsp;
      <div>
        <input type='text' className={s.createPin__addField} />&nbsp;
        <span className={s.createPin__addText}><FormattedMessage id='create_pin_day' /></span>
      </div>
      <div className={s.createPin__addBtn}>
        <Button
          wide
          color='yellow'>
          <Text
            size={14}
            fontInherit
            uppercase >
            <FormattedMessage id='create_pin_generate' />
          </Text>
        </Button>
      </div>
    </div>
    <div className={s.createPin__list}>
      {devices}
    </div>
  </div>
);

export default CreatePin;
