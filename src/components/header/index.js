import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import changeLocale from '../../actions/changeLocale';
import { setUserLogout } from '../../actions/user';
import HeaderPure from './HeaderPure';

const makeLangs = (langs = []) => langs.reduce((memo, item) => ([...memo, item.label]), []);

class Header extends PureComponent {
  static propTypes = {
    langs: pt.array.isRequired,
    auth: pt.array.isRequired,
    changeLocale: pt.func.isRequired,
    setUserLogout: pt.func.isRequired,
  }

  handleLangChange = arg => this.props.changeLocale(arg.value)

  handleOut = () => this.props.setUserLogout()

  render() {
    return (
      <HeaderPure
        locale={this.props.locale}
        langs={this.props.langs}
        onChange={this.handleLangChange}
        onOut={this.handleOut}
        auth={this.props.auth} />
    );
  }
}

export default connect(
  state => ({
    langs: makeLangs(state.languages.list),
    locale: state.languages.locale,
    auth: state.user.authorize,
  }),
  { changeLocale, setUserLogout },
)(Header);
