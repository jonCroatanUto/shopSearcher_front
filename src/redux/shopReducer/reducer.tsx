import initialState from "./state";
import { SET_SHOP_ID } from "./types";
interface Action {
  type: typeof SET_SHOP_ID;
  payload: string;
}

const shopReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SHOP_ID:
      return { ...state, shopID: action.payload };

    default:
      return state;
  }
};

export default shopReducer;
