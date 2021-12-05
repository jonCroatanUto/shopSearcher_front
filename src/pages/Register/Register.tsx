import React, { useState } from "react";
import { register } from "../../apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useNavigate } from "react-router";
import { responseMessageManagment } from "../../redux/modalReducer/action";
import { fetchuUserDataAction } from "../../redux/userReducer/actions";

function Register() {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const { response } = useSelector((state: RootState) => state.modalReducer);

  interface RegisterCredentials {
    userName: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    adress: string;
  }
  interface targetObject {
    target: {
      name: string;
      value: string;
    };
  }
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    userName: "",
    email: "",
    password: "",
    name: "",
    lastName: "",
    adress: "",
  });
  function onChangeSetCredentials({ target: { name, value } }: targetObject) {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }
  function singUP(e: any) {
    e.preventDefault();
    register(credentials).then((res) => {
      console.log(res.data.newUser);
      if (res.data.succes) {
        dispatch(fetchuUserDataAction(res.data.newUser));
        navegate("/");
      } else {
        dispatch(
          responseMessageManagment({
            responseMessage: res.data.message,
            isSuccedToSavePlace: "fail",
          })
        );
      }
    });
  }

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <main className="form-signin">
            <form method="post" onSubmit={singUP}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <div className="form-floating">
                <input
                  name="userName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your user name"
                  onChange={onChangeSetCredentials}
                  required
                />
                <label htmlFor="floatingInput">Write your user name</label>
              </div>
              <div className="form-floating">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={onChangeSetCredentials}
                  required
                />
                <label htmlFor="floatingInput">Write your email</label>
              </div>
              <div className="form-floating">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={onChangeSetCredentials}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your name"
                  onChange={onChangeSetCredentials}
                  required
                />
                <label htmlFor="floatingInput">Write your name</label>
              </div>
              <div className="form-floating">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your last name"
                  onChange={onChangeSetCredentials}
                  required
                />
                <label htmlFor="floatingInput">Write your user name</label>
              </div>
              <div className="form-floating">
                <input
                  name="adress"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your adress"
                  onChange={onChangeSetCredentials}
                />
                <label htmlFor="floatingInput">Write your adress</label>
              </div>
              <div className="col-12">
                {response.responseMessage === "" ? (
                  <div></div>
                ) : (
                  <>
                    {response.isSuccedToSavePlace === "fail" ? (
                      <div
                        className="col-12 align-self-center alert alert-warning"
                        role="alert"
                      >
                        <p>{response.responseMessage}</p>
                      </div>
                    ) : (
                      <div
                        className="col-12 align-self-center alert alert-success"
                        role="alert"
                      >
                        <p>{response.responseMessage}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="submitbuttons">
                <button type="submit" className="btn btn-outline-success">
                  singUP
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Register;
