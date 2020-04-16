const getWindowSize = payload => ({
  type: 'GET_WINDOW_SIZE',
  payload,
});

export default data => dispatch => dispatch(getWindowSize(data));
