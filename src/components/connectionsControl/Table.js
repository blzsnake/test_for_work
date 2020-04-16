import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'ghofi-react-components';

import TableConstructor from '../tableConstructor';

import s from './styles.less';

/**
 * @param  {string} {title=''
 * @param  {array} texts=[]}
 */

const Table = ({ table = {}, name, pinQuantity, freePinQuantity, isTablet }) => (
  <div className={s.table}>
    <div className={s.table__title}>
      <Text
        size={36}
        sizeTablet={24}
        isThreeSixB >
        <FormattedMessage id='create_pin_table_title' />
      </Text>
    </div>
    <div className={s.table__texts}>
      <Text
        size={18}
        sizeTablet={16}
        tagName='p'>
        <FormattedMessage
          id='create_pin_table_text'
          values={{
            name,
            pinQuantity,
            pinFree: freePinQuantity,
          }} />
      </Text>
    </div>
    <div className={s.table__wrapper}>
      <TableConstructor {...table} isTablet={isTablet} />
    </div>
  </div>
);

export default Table;
