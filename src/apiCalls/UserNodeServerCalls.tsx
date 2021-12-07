import axios from "axios";
const { REACT_APP_NODE_SERVER_LOCATION } = process.env;

// this file content calls to node server enpoints in order to manage the user credentials

//create new user
export async function register(props: {
  userName: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  adress: string;
}) {
  return axios({
    method: "post",
    url: `${REACT_APP_NODE_SERVER_LOCATION}users/signup`,
    data: {
      userName: props.userName,
      email: props.email,
      password: props.password,
      name: props.name,
      lastName: props.lastName,
      adress: props.adress,
    },
  });
}
export async function login(props: { email: string; password: string }) {
  return axios({
    method: "post",
    url: `${REACT_APP_NODE_SERVER_LOCATION}users/signin`,
    data: {
      email: props.email,
      password: props.password,
    },
  });
}
