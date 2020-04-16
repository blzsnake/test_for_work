/* eslint-disable no-console */
import axios from 'axios';

const getConstructorFromBase = payload => ({
  type: 'GET_CONSTRUCTOR_BASE',
  payload: payload.data,
});

export default payload => dispatch => {
  axios({
    method: 'get',
    url: `${process.env.API}/profile/constructor`,
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  })
    .then(data => dispatch(getConstructorFromBase(data)))
    .catch(error => console.log(error));
};
