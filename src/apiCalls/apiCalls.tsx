import axios from "axios";
const { REACT_APP_ABSTRACT_API } = process.env;
export async function getMyLocation(
  businessType: string,
  radius: string,
  latitude: string,
  longitude: string
) {
  return axios({
    method: "post",
    url: "http://localhost:4000/shop/nearlyShops",
    data: {
      type: businessType,
      latitude: latitude,
      longitude: longitude,
      radius: radius,
    },
  });
}
export async function getUserLocation() {
  return axios({
    method: "get",
    url: `https://ipgeolocation.abstractapi.com/v1/?api_key=${REACT_APP_ABSTRACT_API}`,
  });
}

// export async function movieDetails(id: number) {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_API_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`,
//   });
// }
