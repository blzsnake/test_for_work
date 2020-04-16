import { pathOr, path } from 'ramda';

export default function reducer(state, action) {
  if (action.type === 'USER_LOGOUT') {
    if (window && window.localStorage) {
      window.localStorage.removeItem('token');
    }

    return ({
      ...state,
      authorize: false,
    });
  }
  if (action.type === 'USER_AUTH') {
    if (action.payload && action.payload.status === 200 && action.payload.data.client_id) {
      const data = pathOr({}, ['payload', 'data'], action);
      const token = path(['payload', 'data', 'token'], action);
      const newState = {
        ...state,
        authorize: true,
        client_id: data.client_id,
        error: false,
        token,
        // data,
      };

      if (window && window.localStorage) {
        window.localStorage.setItem('token', token);
      }

      return newState;
    }

    if (action.payload && action.payload.status === 200 && action.payload.message) {
      return {
        ...state,
        error: action.payload.data.message,
      };
    }
  }

  if (action.type === 'WWPASS_SETTED') {
    return {
      ...state,
      puid: pathOr(null, ['payload', 'data', 'puid'], action),
    };
  }

  return state;
}
