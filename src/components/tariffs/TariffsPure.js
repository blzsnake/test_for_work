import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button, Container } from 'ghofi-react-components';
import TableConstructor from '../tableConstructor';
import toAlfa3 from '../../utils/toAlfa3';
import setCurrency from '../../utils/setCurrency';

import s from './styles.less';

function getTitle(data = {}, locale = 'ENG') {
  return data.info ? data.info.title || '' :
    data.webData && data.webData.title
    && (data.webData.title[locale] || data.webData.title.en);
}

const PAYMENTS = {
  titles: ['ID', <FormattedMessage id='finance_date' />, <FormattedMessage id='title' />, <FormattedMessage id='finance_sum' />, <FormattedMessage id='status' />],
  rows: [],
};
const makeTableData = (locale, table = [], template = PAYMENTS) => {
  const arr = { ...template };
  arr.rows = table.reduce((memo, item) =>
    ([...memo,
      [
        item.id,
        item.createTime.split('T')[0],
        getTitle(item, toAlfa3(locale)),
        `${item.amount || item.price} ${setCurrency(String(item.currencyId || 978))}`,
        (item.status ? item.status.replace('_', ' ') : ''),
      ],
    ]), []);
  return ({
    ...arr,
  });
};
const TariffsPure = props => (
  <section id='tariffs' className={s.tariffs}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='tariffs' />
        </Text>
      </div>
      <div className={s.table}>
        <TableConstructor {...makeTableData(props.locale, props.tariffs, PAYMENTS)} isTablet={props.isTablet} />
      </div>
    </Container>
  </section>
);

export default TariffsPure;
