import initialState from "./state";
import { FETCH_DATA_USER } from "./types";
interface Action {
  type: typeof FETCH_DATA_USER;
  payload: {
    userId: string;
  };
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_USER:
      return { ...state, userId: action.payload };

    default:
      return state;
  }
};

export default userReducer;
