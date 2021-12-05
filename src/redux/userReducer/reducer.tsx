import initialState from "./state";
import { FETCH_DATA_USER, RELOAD_USER_DATA } from "./types";
interface Action {
  payload: {
    _id: string;
    userName: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    adress: string;
  };
  type: string;
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_USER:
      return { ...state, userData: action.payload };
    case RELOAD_USER_DATA:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
