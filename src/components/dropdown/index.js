/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import classNames from 'classnames';

import s from './styles.less';

const DEFAULT_PLACEHOLDER_STRING = 'Select...';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || {
        label: props.placeholder || DEFAULT_PLACEHOLDER_STRING,
        value: '',
      },
      isOpen: false,
    };
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.fireChangeEvent = this.fireChangeEvent.bind(this);
  }

  componentDidMount() {
    if (document) {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({ selected: newProps.value });
    } else if (!newProps.value) {
      this.setState({
        selected: {
          label: newProps.placeholder || DEFAULT_PLACEHOLDER_STRING,
          value: '',
        },
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    if (document) {
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }

  setValue(value, label) {
    const newState = {
      selected: {
        value,
        label,
      },
      isOpen: false,
    };
    this.fireChangeEvent(newState);
    this.setState(newState);
  }

  handleMouseDown = event => {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen);
    }
    if (event.type === 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  fireChangeEvent(newState) {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  buildMenu() {
    const { options, baseClassName } = this.props;
    const ops = options.map(option => {
      if (option.type === 'group') {
        const groupTitle = (<div className={`${baseClassName}-title`}>{option.name}</div>);
        const optionItems = option.items.map(item => this.renderOption(item));

        return (
          <div className={`${baseClassName}-group`} key={option.name}>
            {groupTitle}
            {optionItems}
          </div>
        );
      }
      return this.renderOption(option);
    });

    return ops.length ? ops : <div className={s[`${baseClassName}-noresults`]}>No options found</div>;
  }

  handleDocumentClick(event) {
    if (this.mounted) {
      if (this.drop && !this.drop.contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false });
        }
      }
    }
  }

  renderOption(option) {
    const classes = {
      [s[`${this.props.baseClassName}-option`]]: true,
      [s[option.className]]: !!option.className,
      [s[`optionType_${option.value}`]]: option.value,
      [s['is-selected']]: option === this.state.selected,
    };


    const optionClass = classNames(classes);
    const value = option.value || option.label || option;
    const label = option.label || option.value || option;

    return (
      <div
        key={value}
        className={optionClass}
        onClick={this.setValue.bind(this, value, label)}
        onKeyDown={this.setValue.bind(this, value, label)}
        tabIndex={0}
        role='button'
      >

        {label}
      </div>
    );
  }

  render() {
    const { baseClassName, placeholderClassName, menuClassName, className, mod } = this.props;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    const dropdownClass = classNames({
      [s[`${baseClassName}-root`]]: true,
      [s.className]: !!className,
      [s['is-open']]: this.state.isOpen,
    });
    const placeholderClass = classNames({
      [s[`${baseClassName}-placeholder`]]: true,
      [s[placeholderClassName]]: !!placeholderClassName,
    });
    const menuClass = classNames({
      [s[`${baseClassName}-menu`]]: true,
      [s[`${baseClassName}-menu_mod_${menuClassName}`]]: !!menuClassName,
    });
    const value = (<div className={placeholderClass}>{placeHolderValue}</div>);
    const menu = this.state.isOpen ? <div className={menuClass}>{this.buildMenu()}</div> : null;

    return (
      <div
        ref={el => { this.drop = el; }}
        className={dropdownClass}>
        <div
          className={classNames({
            [s[`${baseClassName}-control`]]: true,
            [s[`${baseClassName}-control_${mod}`]]: mod,
            [s[`${baseClassName}-control_${this.state.selected}`]]: this.state.selected,
          })}
          onKeyDown={this.handleMouseDown}
          onClick={this.handleMouseDown}
          onTouchEnd={this.handleMouseDown}
          role='button'
          tabIndex={0}>
          {value}
          <i className={s[`${baseClassName}-arrow`]} />
        </div>
        {menu}
      </div>
    );
  }
}

Dropdown.defaultProps = { baseClassName: 'Dropdown' };

export default Dropdown;
