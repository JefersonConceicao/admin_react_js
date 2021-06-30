import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import login from './login/reducer';

const reducers = combineReducers({
  menu,
  settings,
  login,
});

export default reducers;