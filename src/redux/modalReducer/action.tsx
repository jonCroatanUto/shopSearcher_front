import { SAVE_FAVORITE } from "./types";

export const responseMessageManagment = (value: {
  isSuccedToSavePlace: string;
  responseMessage: string;
}) => ({
  type: SAVE_FAVORITE,
  payload: value,
});
