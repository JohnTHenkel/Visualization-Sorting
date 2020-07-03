import { combineReducers } from 'redux';
import updateArray from './array';
import isRunning from './running';

export default combineReducers ({
  updateArray,
  isRunning,
});