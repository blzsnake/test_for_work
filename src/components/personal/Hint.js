import React from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Text } from 'ghofi-react-components';

import s from './styles.less';

const makeInfo = texts => (
  <div className={s.hint__info}>{texts.map(text => (
    <div className={s.hint__paragraph}>
      <Text
        size={18}
        tagName='p'>
        <FormattedMessage id={text} />
      </Text>
    </div>))}
  </div>
);

const makeLegend = list => (
  <ul className={s.hint__legend}>{list.map(item => (
    <div className={s.hint__item}>
      <div className={classnames({
        [s.hint__view]: true,
        [s[`hint__view_${item.view}`]]: true,
        })} />
      <div className={s.hint__descr}>
        <Text
          size={18}
          tagName='p'>
          <FormattedMessage id={item.text} />
        </Text>
      </div>
    </div>))}
  </ul>
);

const Hint = ({ title = '', texts = [], list = [] }) => (
  <div className={s.hint}>
    <div className={s.hint__title}>
      <Text
        size={36}
        isThreeSixB >
        <FormattedMessage id={title} />
      </Text>
    </div>
    <div className={s.hint__wrapper}>
      {makeInfo(texts)}
      {makeLegend(list)}
    </div>
  </div>
);

export default Hint;
