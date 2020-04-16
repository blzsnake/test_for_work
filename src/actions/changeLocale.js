export default locale => dispatch => {
  dispatch(({
    type: 'CHANGE_LOCALE',
    payload: locale,
  }));
};
