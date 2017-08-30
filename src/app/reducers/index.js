import {combineReducers} from 'redux';
import registration from './registration';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  registration, form: formReducer
});

export default rootReducer;
