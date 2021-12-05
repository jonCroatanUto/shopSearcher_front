import { combineReducers } from "redux";
import userReducer from "./userReducer/reducer";
import modalReducer from "./modalReducer/reducer";
import shopReducer from "./shopReducer/reducer";
// import tvShowsReducer from "./tvShowsReducer/reducer";
// import switchReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer,
  shopReducer: shopReducer,
});
export type RootState = ReturnType<typeof reducers>;
