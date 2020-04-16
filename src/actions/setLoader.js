const setLoader = payload => ({
  type: 'SET_LOADER',
  payload,
});

export default loading => dispatch => dispatch(setLoader(loading));
