import axios from "axios";
//interaction with shop collection
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

//interaction with shopList collection

export async function getAllMyShoplists() {
  return axios({
    url: "http://localhost:4000/shopList/",
    method: "get",
  });
}
export async function addSHopToShoplist(shopId: string, shopListName: string) {
  console.log(shopId);
  return axios({
    url: "http://localhost:4000/shopList/addShopinList",
    method: "PATCH",
    data: {
      shopId: shopId,
      shopListName: shopListName,
    },
  });
}
export async function createNewShoplistApi(
  shopListName: string,
  shop: string,
  owner: string
) {
  return axios({
    url: "http://localhost:4000/shopList/newShopList",
    method: "POST",
    data: {
      shopListName: shopListName,
      shops: shop,
      owner: owner,
    },
  });
}
