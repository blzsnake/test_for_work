import React from 'react';
import { FormattedMessage } from 'react-intl';
import getLinks from '../../../config/links';

export default [
  {
    value: <FormattedMessage id='footer_legal' />,
    href: getLinks(process.env.LINK_ENV).legal,
  },
  {
    value: <FormattedMessage id='footer_cookies' />,
    href: getLinks(process.env.LINK_ENV).cookies,
  },
  {
    value: <FormattedMessage id='footer_link_lk' />,
    href: getLinks(process.env.LINK_ENV).profile,
  },
];
