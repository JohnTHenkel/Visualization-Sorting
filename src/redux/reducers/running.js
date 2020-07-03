import { SET_RUNNING } from "../actionTypes";

const initialState = {
    isRunning: false,
}

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_RUNNING: 
      const { isRunning } = action.payload;
      return {
        ...state,
        isRunning : isRunning
      };
    default:
      return state;
  }
}