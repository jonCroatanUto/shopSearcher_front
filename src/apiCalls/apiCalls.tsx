import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION } = process.env;
export async function getMyLocation(
  businessType: string,
  radius: string,
  latitude: string,
  longitude: string
) {
  return axios({
    method: "post",
    url: `${REACT_APP_NODE_SERVER_LOCATION}shop/nearlyShops`,
    data: {
      type: businessType,
      latitude: latitude,
      longitude: longitude,
      radius: radius,
    },
  });
}

//this locate
export async function getUserLocation() {
  return axios({
    method: "post",
    url: `${REACT_APP_NODE_SERVER_LOCATION}users/locateUser`,
    data: {},
  });
}

// export async function movieDetails(id: number) {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_API_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`,
//   });
// }
