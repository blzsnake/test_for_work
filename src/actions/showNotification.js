const showNotification = payload => ({
  type: 'SHOW_NOTIFICATION',
  payload,
});

export default (data = {}) => dispatch => dispatch(showNotification(data));
