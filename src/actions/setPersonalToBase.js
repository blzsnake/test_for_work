/* eslint-disable no-console */
import axios from 'axios';
import showNotification from './showNotification';

const setPersonalToBase = payload => ({
  type: 'SET_PERSONAL_BASE',
  payload,
});

export default (token, data) => dispatch => {
  axios({
    method: 'post',
    url: `${process.env.API}/profile/personal`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(payload => {
      dispatch(showNotification({
        open: true,
        color: '#3ac322',
        content: data.content,
        position: 'bottom-right',
      }));
      dispatch(setPersonalToBase(payload.data));
    }).catch(error => console.log(error));
};
