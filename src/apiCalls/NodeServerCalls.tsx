import axios from "axios";

export async function addTofavorites(
  shopName: string,
  businessType: string,
  adress: string,
  owner: string,
  rating: number,
  user_ratings_total: number,
  icon: string
) {
  return axios({
    method: "post",
    url: `http://localhost:4000/shop/saveShop`,
    data: {
      name: shopName,
      businessType: businessType,
      vicinity: adress,
      owner: owner,
      rating: rating,
      user_ratings_total: user_ratings_total,
      icon: icon,
    },
  });
}

export async function listFavorites() {
  return axios({
    method: "get",
    url: `http://localhost:4000/shop/`,
  });
}
