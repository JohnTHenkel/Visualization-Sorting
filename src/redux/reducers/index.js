import { combineReducers } from 'redux';
import updateArray from './array';
import currentComparison from './current';
import isRunning from './running';
import speed from './speed';
import size from './size';

export default combineReducers ({
  updateArray,
  isRunning,
  currentComparison,
  speed,
  size,
});
