import React from 'react';

import s from './styles.less';

const Section = ({ children }) => (
  <section className={s.section}>
    {children}
  </section>
);

export default Section;
