import pt from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import s from './styles.less';

class Field extends PureComponent {
  static propTypes = {
    type: pt.string,
    placeholder: pt.string,
    mod: pt.string,
    name: pt.string,
    disabled: pt.bool,
    wide: pt.bool,
    onChange: pt.func,
  };

  static defaultProps = {
    type: 'text',
    name: 'field',
    mod: null,
    placeholder: '',
    disabled: false,
    wide: false,
    onChange: () => {},
  };

  render() {
    const {
      wide,
      disabled,
      type,
      mod,
      placeholder,
      name,
      error,
    } = this.props;

    return (
      <div
        className={classNames({
            [s.field]: true,
            [s.field_wide]: wide,
            [s.field_disabled]: disabled,
            [s.field_error]: error,
            [s[`field_${mod}`]]: mod,
          })}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={s.input}
          disabled={disabled}
          onChange={this.props.onChange} />
      </div>);
  }
}

export default Field;
