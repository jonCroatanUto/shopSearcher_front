import React, { useState } from "react";

function Register() {
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
  function singIN(e: any) {
    e.preventDefault();
    console.log(credentials);
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
              {/* <svg xmlns="http://www.w3.org/2000/svg">
                <symbol
                  id="check-circle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
                <symbol
                  id="exclamation-triangle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
              </svg> */}

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
