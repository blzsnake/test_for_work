import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import prepareOrder from '../../actions/prepareOrder';
import FinancePure from './FinancePure';
import createOrderObject from './utils';
import mapStateToProps from './mappers';

class Finance extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    isTablet: pt.bool.isRequired,
    invoices: pt.array.isRequired,
  }

  state = {
    table: '',
  }

  handleToggleTable = table => () => (table === this.state.table ? this.setState({ table: '' }) : this.setState({ table }));

  handleOrderClick = order =>
    () => console.log(order) || this.props.prepareOrder(
      createOrderObject({
        ...order,
        name: this.props.name,
        phone: this.props.phone,
        clientId: this.props.clientId,
      }),
    )

  render() {
    return (
      <FinancePure
        name={this.props.name}
        table={this.state.table}
        onOrderClick={this.handleOrderClick}
        toggleTable={this.handleToggleTable}
        invoices={this.props.invoices}
        isTablet={this.props.isTablet}
        ordersNoPayed={this.props.ordersNoPayed}
        ordersPayed={this.props.ordersPayed}
        locale={this.props.locale}
        validDate={this.props.validDate} />
    );
  }
}

export default connect(mapStateToProps, { prepareOrder })(Finance);
