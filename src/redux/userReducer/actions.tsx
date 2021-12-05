import { FETCH_DATA_USER } from "./types";

export const fetchuUserDataAction = (value: { userId: string }) => ({
  type: FETCH_DATA_USER,
  payload: value,
});
