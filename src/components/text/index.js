/* eslint-disable react/require-default-props */
import pt from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import s from './styles.less';

export const propTypes = {
  size: ['inherit', 100, 76, 50, 40, 36, 30, 20, 21, 17, 15, 14, 13, 11, 10, 9],
  align: ['left', 'center', 'right', 'inherit', 'justify'],
  tagName: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'b', 'strong', 'p'],
};

class Text extends PureComponent {
  static propTypes = {
    children: pt.node,
    uppercase: pt.bool,
    noDecoration: pt.bool,
    capitalize: pt.bool,
    className: pt.string,
    tagName: pt.oneOf(propTypes.tagName),
    value: pt.string,
    size: pt.oneOf(propTypes.size),
    sizeTablet: pt.number,
    sizeMobile: pt.number,
    align: pt.oneOf(propTypes.align),
    tinyMobileSize: pt.string,
    fontInherit: pt.bool,
    isThreeSix: pt.bool,
    isThreeSixB: pt.bool,
  };

  static defaultProps = {
    tagName: 'div',
    size: 13,
    uppercase: false,
  };

  render() {
    const {
      children,
      value,
      uppercase,
      capitalize,
      tagName,
      size,
      sizeTablet,
      sizeMobile,
      className,
      align,
      color,
      fontInherit,
      isThreeSix,
      isThreeSixB,
      noDecoration,
      tinyMobileSize,
      ...props
    } = this.props;

    return React.createElement(
      tagName,
      {
        className: classNames({
          [s.text]: true,
          [className]: className,
          [s.text_uppercase]: uppercase,
          [s.text_capitalize]: capitalize,
          [s.text_noDecoration]: noDecoration,
          [s[`text_size_${size}`]]: size,
          [s[`text_size_tablet_${sizeTablet}`]]: sizeTablet,
          [s[`text_size_mobile_${size}`]]: sizeMobile,
          [s[`text_tiny_mobile_size_${tinyMobileSize}`]]: tinyMobileSize,
          [s[`text_color_${color}`]]: color,
          [s[`text_align_${align}`]]: align,
          [s.text_fontInherit]: fontInherit,
          [s.text_threeSix]: isThreeSix,
          [s.text_isThreeSixB]: isThreeSixB,
        }),
        ...props,
      },
      children || value,
    );
  }
}

export default Text;
