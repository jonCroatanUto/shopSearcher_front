import axios from "axios";

export async function addTofavorites(
  shopName: string,
  businessType: string,
  adress: string,
  owner: string
) {
  return axios({
    method: "post",
    url: `http://localhost:4000/shop/saveShop`,
    data: {
      shopName: shopName,
      businessType: businessType,
      adress: adress,
      owner: owner,
    },
  });
}
