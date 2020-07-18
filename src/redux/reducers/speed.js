import { SET_SPEED } from "../actionTypes";

const initialState = {
  speed: 50
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_SPEED:
      const { speed } = action.payload;
      return {
        ...state,
        speed: speed
      };
    default:
      return state;
  }
};
