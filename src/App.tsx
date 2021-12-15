import React, { useEffect } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListShop from "./pages/ListShops/ListShop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { responseMessageManagment } from "./redux/modalReducer/action";
function App() {
  const { response } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccedToSavePlace !== "") {
      console.log("hola");
      setTimeout(() => {
        dispatch(
          responseMessageManagment({
            responseMessage: "",
            isSuccedToSavePlace: "",
          })
        );
      }, 50000);
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listShop" element={<ListShop />} />
      </Routes>
    </>
  );
}

export default App;
