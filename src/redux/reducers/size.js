import { SET_SIZE } from "../actionTypes";

const initialState = {
  size: 25
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_SIZE:
      const { size } = action.payload;
      return {
        ...state,
        size: size
      };
    default:
      return state;
  }
};
