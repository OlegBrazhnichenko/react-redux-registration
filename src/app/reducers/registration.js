import * as types from '../constants/ActionTypes';
import {fromJS} from 'immutable';

const initialState = fromJS(
  {
    email: '',
    name: '',
    surname: '',
    password: ''
  }
);

export default function registrationState(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER:
      console.log(types.REGISTER);
      return state;
    case types.REGISTER_SUCCESS:
      console.log(action.payload);
      return state;
    case types.REGISTER_FAIL:
      return state;
    case types.FIELD_CHANGE:
      return action.payload;
    default: return state;
  }
}

