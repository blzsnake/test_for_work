import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Container, Button } from 'ghofi-react-components';
import setCurrency from '../../utils/setCurrency';
import TableConstructor from '../tableConstructor';
import { PAYMENTS, PAYMENTS_NO_BTN } from './constants';
import toAlfa3 from '../../utils/toAlfa3';

import s from './styles.less';

function getTitle(data = {}, locale = 'ENG') {
  return data.info ? data.info.title || '' :
    data.webData && data.webData.title
    && (data.webData.title[locale] || data.webData.title.en);
}

const DownloadButton = (text, handler = () => {}) => (
  <Button
    onClick={handler}
    wide
    mod='device-cancel'
    color='yellow'>
    <Text
      size={11}
      uppercase
      fontInherit>
      <FormattedMessage id={text} />
    </Text>
  </Button>);

const makeTableData = (locale, table = [], text = 'finance_download', template = PAYMENTS, handler = () => {}) => {
  const arr = { ...template };
  arr.rows = table.reduce((memo, item) =>
    ([...memo,
      [
        item.id,
        item.createTime.split('T')[0],
        getTitle(item, toAlfa3(locale)),
        `${item.amount || item.price} ${setCurrency(String(item.currencyId || 978))}`,
        ...(arr.titles.length > 4 ? [DownloadButton(text, handler(item))] : []),
      ],
    ]), []);
  return ({
    ...arr,
  });
};

const FinancePure = props => (
  <section id='finance' className={s.finance}>
    <Container>
      <div className={s.title}>
        <Text
          size={46}
          sizeTablet={32}
          isThreeSixB >
          <FormattedMessage id='finance_title' />
        </Text>
      </div>
      {/* <div className={s.subtitle}>
        <Text
          size={20}
          sizeTablet={16}>
          <FormattedMessage
            id='finance_text'
            values={{
              name: props.name,
              payDate: props.validDate,
              payMonthly: '15 €',
            }} />
        </Text>
      </div> */}
      <div className={s.controls}>
        <div className={s.button}>
          <Button
            wide
            color={props.table === 'invoice' ? 'yellow' : null}
            onClick={props.toggleTable('invoice')}>
            <Text
              size={14}
              uppercase
              fontInherit>
              <FormattedMessage id='finance_btn_acc' />
            </Text>
          </Button>
        </div>
        <div className={s.button}>
          <Button
            wide
            color={props.table === 'payments' ? 'yellow' : null}
            onClick={props.toggleTable('payments')}>
            <Text
              size={14}
              uppercase
              fontInherit>
              <FormattedMessage id='finance_btn_pay' />
            </Text>
          </Button>
        </div>
      </div>
      <div className={s.tables}>
        {!!(props.table === 'invoice' && props.ordersPayed && props.ordersPayed.length) && <div className={s.table}><TableConstructor {...makeTableData(props.locale, props.ordersPayed)} isTablet={props.isTablet} /></div>}
        {!!(props.table === 'payments' && props.invoices && props.invoices.length) && <div className={s.table}><TableConstructor {...makeTableData(props.locale, props.invoices, 'finance_pay', PAYMENTS_NO_BTN)} isTablet={props.isTablet} /></div>}
        {!!(props.ordersNoPayed && props.ordersNoPayed.length) &&
          <div className={s.table}>
            <div className={s.title}>
              <Text
                size={36}
                sizeTablet={24}
                isThreeSixB >
                <FormattedMessage id='finance_not_pays' />
              </Text>
            </div>
            <TableConstructor
              {...makeTableData(props.locale, props.ordersNoPayed, 'finance_pay', PAYMENTS, props.onOrderClick)}
              isTablet={props.isTablet} />
          </div>
          }
      </div>
    </Container>
  </section>
);

export default FinancePure;
