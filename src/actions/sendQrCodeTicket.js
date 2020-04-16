import axios from 'axios';

const userAuth = payload => ({
  type: 'USER_AUTH',
  payload,
});

const wwpassTicketSetted = payload => ({
  type: 'WWPASS_SETTED',
  payload,
});

export default (status, ticket, token, id) => dispatch => {
  axios({
    method: 'get',
    url: `${process.env.API}/auth/${token ? 'wwpass_set' : 'wwpass_get'}/?ticket=${ticket}&status=${status}&id=${id}`,
    ...(token && { headers: {
      Authorization: `Bearer ${token}`,
    } }),
  }).then(response => {
    if (!token || response.token) {
      dispatch(userAuth(response));
    }

    if (response && response.data && response.data.puid) {
      dispatch(wwpassTicketSetted(response));
    }
    return response;
  });
};
