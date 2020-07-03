import { UPDATE_ARRAY, SET_RUNNING } from './actionTypes';

export const updateArray = array => ({
  type: UPDATE_ARRAY,
  payload: { array }
});

export const isRunning = isRunning => ({
  type: SET_RUNNING,
  payload: { isRunning}
})
