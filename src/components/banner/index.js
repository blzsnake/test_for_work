import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';

import mapStateToProps from './mappers';
import BannerPure from './BannerPure';

class Banner extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    pinQuantity: pt.number.isRequired,
    freePinQuantity: pt.number.isRequired,
  }

  state = {
    activeMenu: null,
  }

  handleMenuClick = index => () => this.setState({
    activeMenu: index,
  })

  render() {
    return (
      <BannerPure
        name={this.props.name}
        pinQuantity={this.props.pinQuantity}
        freePinQuantity={this.props.freePinQuantity}
        locale={this.props.locale}
        onMenuClick={this.handleMenuClick}
        activeMenu={this.state.activeMenu}
        validDate={this.props.validDate} />
    );
  }
}

export default connect(mapStateToProps)(Banner);
