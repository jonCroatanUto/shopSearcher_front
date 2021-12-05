import { SET_SHOP_ID } from "./types";

export const setShopIdAction = (value: string) => ({
  type: SET_SHOP_ID,
  payload: value,
});
