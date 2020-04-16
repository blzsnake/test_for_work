/* eslint-disable no-console */
import axios from 'axios';
import instance from '../utils/axInstanse';

const userAuth = payload => ({
  type: 'USER_AUTH',
  payload,
});

const userAuthSuccess = payload => ({
  type: 'USER_AUTH_SUCCESS',
  payload,
});

const userLogout = payload => ({
  type: 'USER_LOGOUT',
  payload,
});

export const setUserAuth = ({ login, password }) => dispatch => {
  instance.get(`${process.env.API}/auth?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`)
    .then((response = {}) => {
      // todo надо зарефакторить авторизацию
      dispatch(userAuth(response));
      if (response.data && response.data.result && response.data.client_id) {
        dispatch(userAuthSuccess(response.data));
      }
    }).catch(error => console.log(error));
};

export const setUserLogout = () => dispatch => dispatch(userLogout());

export const setUserAuthToken = token => dispatch => {
  axios({
    url: `${process.env.API}/auth/token`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      dispatch(userAuth(response));
      if (response.data && response.data.result && response.data.client_id) {
        dispatch(userAuthSuccess(response.data));
      }
    })
    .catch(error => console.log(error));
};
