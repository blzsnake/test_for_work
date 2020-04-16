import axios from 'axios';
import setLoader from './setLoader';

const setPins = payload => ({
  type: 'GET_USER_PINS',
  payload,
});

export default payload => dispatch => {
  dispatch(setLoader(true));
  axios({
    method: 'post',
    url: `${process.env.API}/profile/get_pins_list`,
    data: payload,
  }).then(data => {
    dispatch(setPins(data.data));
    dispatch(setLoader(false));
  });
};
