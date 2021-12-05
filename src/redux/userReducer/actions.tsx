import { FETCH_DATA_USER, RELOAD_USER_DATA } from "./types";

export const fetchuUserDataAction = (value: {
  _id: string;
  userName: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  adress: string;
}) => ({
  type: FETCH_DATA_USER,
  payload: value,
});
export const reloadUserDataAction = () => ({
  type: RELOAD_USER_DATA,
});
