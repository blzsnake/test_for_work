/* eslint-disable react/require-default-props */
import pt from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import s from './styles.less';

export const propTypes = {
  tagName: ['button', 'a', 'div'],
};

class Button extends PureComponent {
  static propTypes = {
    children: pt.node,
    type: pt.string,
    mod: pt.string,
    color: pt.string,
    href: pt.string,
    disabled: pt.bool,
    wide: pt.bool,
    menu: pt.bool,
    tagName: pt.oneOf(propTypes.tagName),
    onClick: pt.func,
    onMouseOver: pt.func,
    onMouseLeave: pt.func,
  };

  static defaultProps = {
    tagName: 'button',
    type: 'button',
    disabled: false,
    menu: false,
    wide: false,
    onClick: () => {},
    onMouseOver: () => {},
    onMouseLeave: () => {},
  };

  render() {
    const {
      children,
      color,
      wide,
      disabled,
      onClick,
      onMouseOver,
      onMouseLeave,
      type,
      mod,
      href,
      value,
      menu,
    } = this.props;
    const tagName = href ? 'a' : this.props.tagName;

    return React.createElement(
      tagName,
      {
        className: classNames({
          [s.button]: true,
          [s[`button_color_${color}`]]: color,
          [s.button_wide]: wide,
          [s.button_disabled]: disabled,
          [s.button_menu]: menu,
          [s[`button_${mod}`]]: mod,
        }),
        type: (tagName === 'button' && type) || undefined,
        href,
        disabled,
        onClick,
        onMouseOver,
        onMouseLeave,
      },
      children || value,
    );
  }
}

export default Button;
