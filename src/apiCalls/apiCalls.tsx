import axios from "axios";

export async function getMyLocation(businessType: string) {
  return axios({
    method: "post",
    url: "http://localhost:4000/shop/nearlyShops",
    data: {
      type: businessType,
    },
  });
}

// export async function movieDetails(id: number) {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_API_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`,
//   });
// }
