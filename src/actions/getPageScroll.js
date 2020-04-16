const getPageScroll = payload => ({
  type: 'GET_PAGE_SCROLL',
  payload,
});

export default data => dispatch => dispatch(getPageScroll(data));
