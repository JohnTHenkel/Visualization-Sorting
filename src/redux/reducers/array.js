import { UPDATE_ARRAY } from "../actionTypes";

const initialState = {
  array: [],
};

export default function (state = initialState, action) {

  switch (action.type) {
    case UPDATE_ARRAY: 
      const { array } = action.payload;
      return {
        ...state,
        array : array
      };
    default:
      return state;
  }
};
