const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'SET_LANGS_LIST') {
    return state.merge({
      list: action.payload,
    });
  }

  if (action.type === 'SET_TRANSLATE') {
    return state.merge({
      translate: action.payload,
    });
  }

  if (action.type === 'CHANGE_LOCALE') {
    if (window && window.localStorage) {
      window.localStorage.setItem('preferred_language', action.payload);
    }

    return state.merge({
      locale: action.payload,
    });
  }

  return state;
}
