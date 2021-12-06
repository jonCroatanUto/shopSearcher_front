import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/reducers";
import { reloadUserDataAction } from "../../redux/userReducer/actions";
function NavBar() {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.userReducer);
  function logout() {
    dispatch(reloadUserDataAction());
    navegate("/");
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {userData.userName === "" ? (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="navbar-brand">SignIn for more</div>
            </Link>
          ) : (
            <div className="navbar-brand">Welcome {userData.userName}</div>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <p className="nav-link active" aria-current="page">
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                {userData.userName === "" ? (
                  <p className="nav-link disabled"> profile</p>
                ) : (
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <p className="navbar-brand">profile</p>
                  </Link>
                )}
              </li>
              {userData.userName === "" ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Identify
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <p className="dropdown-item">Login</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" style={{ textDecoration: "none" }}>
                        <p className="dropdown-item">Register</p>
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
              ) : (
                <button
                  onClick={logout}
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Log Out
                </button>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Searcher in process..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
