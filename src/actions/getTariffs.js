import axios from 'axios';

const setTariffs = payload => ({
  type: 'SET_TARIFFS',
  payload,
});

export default () => dispatch => {
  axios.get(`${process.env.API}/data/tariffs/prices`)
    .then(data => dispatch(setTariffs(data.data)));
};
