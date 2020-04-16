import React from 'react';
import classnames from 'classnames';

import s from './styles.less';

const Container = ({ wide, children }) => (
  <div className={classnames(
    {
      [s.container]: true,
      [s.container_wide]: wide,
    }
  )}>
    {children}
  </div>
);

export default Container;
