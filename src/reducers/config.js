export default function reducer(state = {}, action) {
  if (action.type === 'SET_LOADER') {
    return state.merge({
      loading: action.payload,
    });
  }
  if (action.type === 'SHOW_NOTIFICATION') {
    return state.merge({
      notification: action.payload,
    });
  }
  return state;
}
