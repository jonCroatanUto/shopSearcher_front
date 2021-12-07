import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION } = process.env;

// this Calls are point to my node server endpoints and these to the Google apis

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

//this locate the user
export async function getUserLocation() {
  return axios({
    method: "post",
    url: `${REACT_APP_NODE_SERVER_LOCATION}users/locateUser`,
  });
}
