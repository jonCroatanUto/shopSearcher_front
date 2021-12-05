import initialState from "./state";
import { FETCH_DATA_USER } from "./types";
interface Action {
  type: typeof FETCH_DATA_USER;
  payload: {
    _id: string;
    userName: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    adress: string;
  };
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

export default userReducer;
