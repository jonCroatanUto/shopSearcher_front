import { SAVE_FAVORITE, EMPTY_SHOP } from "./types";

export const responseMessageManagment = (value: {
  isSuccedToSavePlace: string;
  responseMessage: string;
}) => ({
  type: SAVE_FAVORITE,
  payload: value,
});
export const isEmptyFavoritesShop = (value: boolean) => ({
  type: EMPTY_SHOP,
  payload: value,
});
