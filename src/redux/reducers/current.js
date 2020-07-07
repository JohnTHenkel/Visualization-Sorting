import { SET_CURRENT } from "../actionTypes";

const initialState = {
  currentComparison: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CURRENT:
      const { currentComparison } = action.payload;
      return {
        ...state,
        currentComparison: currentComparison
      };
    default:
      return state;
  }
};
