const initialState = {
  tariffs: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'USER_AUTH_SUCCESS') {
    return state.merge({
      tariffs: action.payload.data ? action.payload.data.orders : [],
    });
  }
  return state;
}
