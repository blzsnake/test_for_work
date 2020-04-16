import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button } from 'ghofi-react-components';


import s from './styles.less';

const makeDialog = ({ title, dialog = [] }, index, props) => (
  <div className={s.dialog}>
    <Button
      onClick={props.onToggleDialog(index)}
      wide
      mod='dialog'
      color={index === props.dialogShow ? 'yellow' : ''}>
      <Text size={18}>{title}</Text>
    </Button>
    {index === props.dialogShow &&
    <ul className={s.dialogList}>
      {dialog.map(item => (
        <li className={s.dialogItem}>
          <div className={s.dialogCaller}>
            <Text
              size={18}
              sizeTablet={14}
              isThreeSixB><FormattedMessage id={item.caller} />
            </Text>
          </div>
          <div className={s.dialogText}>
            <Text
              size={16}
              sizeTablet={14}>{item.text}
            </Text>
          </div>
        </li>
      ))}
    </ul>}
  </div>
);

const Drafts = props => (
  <div className={s.drafts}>
    <div className={s.subtitle}>
      <Text
        size={36}
        sizeTablet={24}
        isThreeSixB >
        <FormattedMessage id='support_subtitle' />
      </Text>
    </div>
    {props.list.map((item, index) => makeDialog(item, index, props))}
  </div>
);

export default Drafts;
