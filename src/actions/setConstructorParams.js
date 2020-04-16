export default payload => ({
  type: `SET_CONSTRUCTOR_${payload.type.toUpperCase()}`,
  payload: payload.data,
});
