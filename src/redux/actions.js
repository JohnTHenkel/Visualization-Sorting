import { UPDATE_ARRAY } from './actionTypes';

export const updateArray = array => ({
  type: UPDATE_ARRAY,
  payload: { array }
});