/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { setUserAuth } from '../../actions/user';
import sendQrCodeTicket from '../../actions/sendQrCodeTicket';

import LoginFormPure from './LoginFormPure';

class LoginForm extends PureComponent {
  static propTypes = {
    error: pt.string,
    langs: pt.array.isRequired,
    setUserAuth: pt.func.isRequired,
    sendQrCodeTicket: pt.func.isRequired,
  }

  static defaultProps = {
    error: false,
  }

  state = {
    type: '',
    login: '',
    password: '',
    error: this.props.error || '',
  }

  handleChoose = type => () => {
    this.setState({
      type,
    });

    if (type === 'wwpass') {
      wwpassQRCodeAuth && wwpassQRCodeAuth({
        version: 2,
        render: 'qrcode',
        ticketURL: `${process.env.API}/auth/wwpass_token`,
        callback: (status, ticket) => this.props.sendQrCodeTicket(status, ticket, this.props.token),
      });
    }
  }
  handlePinChange = event => this.setState({
    pin: event && event.target.value,
  });

  handleLoginChange = (event, key) => {
    this.setState({
      [key]: event && event.target.value,
      error: '',
    });
  }

  handleAuth = () => this.props.setUserAuth(this.state);

  handleAuthWithLogin = () => {
    const { login, password } = this.state;
    if (!login || !password) {
      this.setState({ error: 'Не заполнены все поля' });
    } else {
      this.handleAuth();
    }
  }

  render() {
    return (
      <LoginFormPure
        langs={this.props.langs}
        onChange={this.handleLoginChange}
        type={this.state.type}
        onChoose={this.handleChoose}
        onAuth={this.handleAuthWithLogin}
        error={this.state.error} />
    );
  }
}

export default connect(
  state => ({
    authorize: state.user.authorize,
    error: state.user.error,
    localization: state.languages.translate,
  }),
  { setUserAuth, sendQrCodeTicket },
)(LoginForm);
