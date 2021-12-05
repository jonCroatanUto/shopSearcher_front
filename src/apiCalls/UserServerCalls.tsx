import axios from "axios";
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
    url: ``,
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
