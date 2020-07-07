import { UPDATE_ARRAY, SET_RUNNING, SET_CURRENT } from './actionTypes';

export const updateArray = array => ({
  type: UPDATE_ARRAY,
  payload: { array }
});

export const isRunning = isRunning => ({
  type: SET_RUNNING,
  payload: { isRunning }
})

export const currentComparison = currentComparison => ({
  type: SET_CURRENT,
  payload: { currentComparison }
})
