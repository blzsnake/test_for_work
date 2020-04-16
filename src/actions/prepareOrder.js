/* eslint-disable no-console */
import axios from 'axios';
import setLoader from './setLoader';
import getLinks from '../../config/links';

const createOrder = payload => ({
  type: 'CREATE_ORDER',
  payload: payload.data,
});

export default payload => dispatch => {
  dispatch(setLoader(true));
  axios({
    method: 'post',
    url: `${process.env.API}/payments/order/create`,
    data: payload,
    withCredentials: true,
    headers: { 'x-ghofi-region': process.env.REGION },
  })
    .then(data => {
      dispatch(setLoader(false));
      dispatch(createOrder(data));

      if (!process.env.SERVER) {
        window.location.href = getLinks(process.env.LINK_ENV).payments;
      }
    })
    .catch(error => {
      dispatch(setLoader(false));
      console.log(error);
    });
};
