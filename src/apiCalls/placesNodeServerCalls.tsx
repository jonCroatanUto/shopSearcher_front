import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION } = process.env;

// this file content calls to node server enpoints in order to manage of the places saved by user

//interaction with shop collection
export async function addTofavorites(
  shopName: string,
  businessType: string,
  adress: string,
  lat: number,
  lng: number,
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
      geometry: { location: { lat: lat, lng: lng } },
      owner: owner,
      rating: rating,
      user_ratings_total: user_ratings_total,
      icon: icon,
    },
  });
}

export async function listFavorites(ownerId: string) {
  return axios({
    method: "get",
    url: `${REACT_APP_NODE_SERVER_LOCATION}shop/${ownerId}`,
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
    url: `${REACT_APP_NODE_SERVER_LOCATION}shopList/myList/${ownerId}`,
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
