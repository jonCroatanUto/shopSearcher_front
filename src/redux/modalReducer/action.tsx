import { SAVE_FAVORITE, DISPLAY_ADD_TO_LIST_MODAL } from "./types";

export const responseMessageManagment = (value: {
  isSuccedToSavePlace: string;
  responseMessage: string;
}) => ({
  type: SAVE_FAVORITE,
  payload: value,
});
export const displayAddToListModal = (value: boolean) => ({
  type: DISPLAY_ADD_TO_LIST_MODAL,
  payload: value,
});
