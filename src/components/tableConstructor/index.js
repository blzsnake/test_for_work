import React from 'react';
import cn from 'classnames';

import s from './styles.less';

const makeHeader = titles => (
  <div className={s.header}>
    {titles.map((title, index) => (
      <div
        className={cn({
          [s.col]: true,
          [s[`col_${index}`]]: typeof index !== 'undefined',
        })}>
        {title}
      </div>
    ))}
  </div>
);

const makeRow = (cols = []) => (
  <div className={s.row}>
    {cols.map((col, index) => (
      <div
        className={cn({
          [s.col]: true,
          [s[`col_${index}`]]: typeof index !== 'undefined',
        })}>
        {col}
      </div>
    ))}
  </div>
);

const makeBody = rows => (
  <div className={s.body}>
    {rows.map(makeRow)}
  </div>
);

const makeMobileTable = (titles, rows) => (
  <div className={s.body}>
    {rows.map((row, index) => (
      <div className={s.mobileRow}>
        <div className={s.mobileIndex}>{index + 1}</div>
        <div className={s.mobileInfo}>
          {row.slice(1).map((item, id) => (
            <div className={s.mobileCol}>
              {titles[id + 1] && titles[id + 1] !== ' ' && <div className={s.mobileTitle}>{titles[id + 1]}</div>}
              <div className={s.mobileText}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const TableConstructor = ({ titles = [], rows = [], isTablet }) => (
  <div className={s.table}>
    {!isTablet && makeHeader(titles)}
    {!isTablet && makeBody(rows)}
    {isTablet && makeMobileTable(titles, rows)}
  </div>
);

export default TableConstructor;
