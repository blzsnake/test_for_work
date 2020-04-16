import axios from 'axios';
import setLoader from './setLoader';
import showNotification from './showNotification';

const setPins = payload => ({
  type: 'GET_USER_PINS',
  payload,
});

export default payload => dispatch => {
  dispatch(setLoader(true));
  axios({
    method: 'post',
    url: `${process.env.API}/profile/clean_pin`,
    data: payload,
  }).then((data = {}) => {
    dispatch(setPins(data.data));
    dispatch(setLoader(false));
    dispatch(showNotification({
      open: true,
      color: '#3ac322',
      content: payload.content,
      position: 'bottom-right',
    }));
  }).catch(error => dispatch(showNotification({
    open: true,
    color: '#f76363',
    content: error,
    position: 'bottom-right',
  })));
};
