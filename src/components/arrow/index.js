import React from 'react';
import { connect } from 'react-redux';
import Button from '../button'; // todo найти способ добавлять кнопки с картинками

import s from './styles.less';

const Arrow = props =>
  (props.auth && (props.scrollX > 600) ?
    <div className={s.arrow}>
      <Button href='#banner' mod='arrow-up' />
    </div> : null);

export default connect(
  ({ user, utils }) => ({
    auth: user.authorize,
    scrollX: utils.scrollX,
  }),
)(Arrow);
