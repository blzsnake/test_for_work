import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import sendQrCodeTicket from '../../actions/sendQrCodeTicket';
import AccessPure from './AccessPure';
import mapStateToProps from './mappers';

class Access extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    sendQrCodeTicket: pt.func.isRequired,
  }

  state = {
    wwpass: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.puid !== this.props.puid) {
      this.setState({ wwpass: !this.state.wwpass });
    }
  }

  handleToggleBlock = () => {
    this.setState({ wwpass: !this.state.wwpass });
    if (!this.state.wwpass) {
      if (window && window.wwpassQRCodeAuth) {
        window.wwpassQRCodeAuth({
          version: 2,
          render: 'qrcode',
          ticketURL: `${process.env.API}/auth/wwpass_token`,
          callback: (status, ticket) =>
            this.props.sendQrCodeTicket(
              status,
              ticket,
              this.props.token,
              this.props.client_id,
            ),
        });
      }
    }
  };

  render() {
    return (
      <AccessPure
        name={this.props.name}
        wwpass={this.state.wwpass}
        toggleBlock={this.handleToggleBlock} />
    );
  }
}

export default connect(mapStateToProps, { sendQrCodeTicket })(Access);
