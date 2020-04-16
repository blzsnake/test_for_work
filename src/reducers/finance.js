import { pathOr } from 'ramda';
import { createSelector } from 'reselect';

const dataSelector = createSelector(
  ({ payload }) => payload,
  payload => pathOr({}, ['data'], payload),
);
const orderSelector = createSelector(
  ({ orders }) => orders,
  (orders = []) => orders,
);
const orderPayedSelector = createSelector(
  orders => orders,
  (orders = []) => orders.filter(order => order.paymentId && order.paymentTime),
);
const ordersNoPayedSelector = createSelector(
  orders => orders,
  (orders = []) => orders.filter(order => !order.paymentId && !order.paymentTime),
);
const productsSelector = createSelector(
  ({ products }) => products,
  (products = []) => products,
);
const invoicesSelector = createSelector(
  ({ payments }) => payments,
  (payments = []) => payments,
);

export const FinancialState = {
  orders: [],
  ordersPayed: [],
  ordersNoPayed: [],
  products: [],
  invoices: [],
  validDate: [],
};


export default function reducer(state = FinancialState, action) {
  if (action.type === 'USER_AUTH_SUCCESS') {
    const data = dataSelector(action);
    const orders = orderSelector(data);
    const ordersPayed = orderPayedSelector(orders);
    const ordersNoPayed = ordersNoPayedSelector(orders);
    const products = productsSelector(data);
    const invoices = invoicesSelector(data);
    const validDate = pathOr('', [0, 'valid_till_time'], products)
    // const validDate = pathOr('', [0, 'valid_till_time'], products).split('T')[0].replace(/-/g, '.');

    return state.merge({
      orders,
      ordersPayed,
      ordersNoPayed,
      products,
      invoices,
      validDate,
    });
  }

  return state;
}
