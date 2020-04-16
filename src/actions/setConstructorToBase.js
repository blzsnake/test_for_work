/* eslint-disable no-console */
import axios from 'axios';

const setConstructorToBase = payload => ({
  type: 'SET_CONSTRUCTOR_BASE',
  payload: payload.data,
});

export default payload => dispatch => {
  axios({
    method: 'post',
    url: `${process.env.API}/profile/constructor`,
    data: payload.data,
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  })
    .then(data => dispatch(setConstructorToBase(data.data)))
    .catch(error => console.log(error));
};
