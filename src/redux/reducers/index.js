import { combineReducers } from 'redux';
import updateArray from './array';
import currentComparison from './current';
import isRunning from './running';

export default combineReducers ({
  updateArray,
  isRunning,
  currentComparison
});
