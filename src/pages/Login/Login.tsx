import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../apiCalls";
import { useNavigate } from "react-router";
import { RootState } from "../../redux/reducers";
import {
  responseMessageManagment,
  displayAddToListModal,
} from "../../redux/modalReducer/action";
import { fetchuUserDataAction } from "../../redux/userReducer/actions";

function Login() {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const { response } = useSelector((state: RootState) => state.modalReducer);

  interface LoginCredentials {
    email: string;
    password: string;
  }
  interface targetObject {
    target: {
      name: string;
      value: string;
    };
  }
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  function onChangeSetCredentials({ target: { name, value } }: targetObject) {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }
  function singIN(e: any) {
    e.preventDefault();
    login(credentials).then((res) => {
      if (res.data.succes) {
        dispatch(fetchuUserDataAction(res.data.foundUser));
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
            <form method="post" onSubmit={singIN}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
                  singIN
                </button>

                <Link to="/register" style={{ textDecoration: "none" }}>
                  <p>OR GO TO SINGUP</p>
                </Link>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Login;
