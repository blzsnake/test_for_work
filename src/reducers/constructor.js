export default function reducer(state, action) {
  if (action.type === 'SET_CONSTRUCTOR_FEATURE') {
    return state.merge({
      features: action.payload,
    });
  }
  if (action.type === 'SET_CONSTRUCTOR_COUNTER') {
    return state.merge({
      counter: action.payload,
    });
  }
  if (action.type === 'SET_CONSTRUCTOR_ANNUAL') {
    return state.merge({
      annual: action.payload,
    });
  }
  if (action.type === 'SET_CONSTRUCTOR_BASE') {
    return state;
  }
  if (action.type === 'GET_CONSTRUCTOR_BASE') {
    return state.merge({
      ...action.payload,
    });
  }
  return state;
}
