import axios from 'axios';
import setLoader from './setLoader';
import showNotification from './showNotification';

const setPins = payload => ({
  type: 'GET_USER_PINS',
  payload,
});

export default data => dispatch => {
  const payload = {
    pin: Number(data.pin),
    client_id: Number(data.client_id),
    data: {
      name: data.name,
      type: data.type,
      label: data.label,
    },
  };

  dispatch(setLoader(true));
  axios({
    method: 'post',
    url: `${process.env.API}/profile/edit_pin`,
    data: payload,
  }).then((response = {}) => {
    dispatch(setPins(response.data));
    dispatch(setLoader(false));
    dispatch(showNotification({
      open: true,
      color: '#3ac322',
      content: 'Data saved',
      position: 'bottom-right',
    }));
  });
};
