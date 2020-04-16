export default function reducer(state, action) {
  if (action.type === 'GET_WINDOW_SIZE') {
    return state.merge({
      viewport: action.payload,
      isTablet: action.payload < 1024,
    });
  }
  if (action.type === 'GET_PAGE_SCROLL') {
    return state.merge({
      scrollX: action.payload,
    });
  }
  return state;
}
