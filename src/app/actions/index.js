import * as types from '../constants/ActionTypes';

export function register(data) {
  return ({
    type: types.REGISTER,
    payload: {
      request: {
        url: '/users',
        method: 'POST',
        data: data
      }
    }
  });
}

export function onFieldChange(data) {
  return ({
    type: types.FIELD_CHANGE,
    payload: data
  });
}
