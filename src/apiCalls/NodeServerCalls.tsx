import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION } = process.env;
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
    url: `${REACT_APP_NODE_SERVER_LOCATION}shop/saveShop`,
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
    url: `${REACT_APP_NODE_SERVER_LOCATION}shop/`,
  });
}

//interaction with shopList collection

export async function getAllShoplists() {
  return axios({
    url: `${REACT_APP_NODE_SERVER_LOCATION}shopList/`,
    method: "get",
  });
}

export async function getAllMyShoplists(ownerId: string) {
  return axios({
    url: `${REACT_APP_NODE_SERVER_LOCATION}shopList/myList?ownerId=${ownerId}`,
    method: "get",
  });
}
export async function addSHopToShoplist(shopId: string, shopListName: string) {
  console.log(shopId);
  return axios({
    url: `${REACT_APP_NODE_SERVER_LOCATION}shopList/addShopinList`,
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
    url: `${REACT_APP_NODE_SERVER_LOCATION}shopList/newShopList`,
    method: "POST",
    data: {
      shopListName: shopListName,
      shops: shop,
      owner: owner,
    },
  });
}
