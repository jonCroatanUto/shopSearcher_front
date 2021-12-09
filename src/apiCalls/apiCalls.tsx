import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION, REACT_APP_IPSTACK_API } = process.env;

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
//this server call execute a function that get the dispositive that use this app approximate position .
//this work with google Api witch block the clients petitions with cors
//That's why to execute the api call in the server side in order to avoid CORS policy
//It work fine in a development enviroment but when I deploy the server(where the api enpoint it's called)
//the reponse it's the position of server maquine that's mades my application useless.

//--that's the server endpoint that execute google api call in the server:

// export async function getUserLocation() {
//   return axios({
//     method: "post",
//     url: `${REACT_APP_NODE_SERVER_LOCATION}users/locateUser`,
//   });
// }

// for now while i dont solve the problem , I will use a not so precise method of geolocate the user:
//--I will use ipstrack api to get the user coordinates:

export async function getUserLocation() {
  return axios({
    method: "GET",
    url: `https://api.ipstack.com/check?access_key=${REACT_APP_IPSTACK_API}`,
  });
}
