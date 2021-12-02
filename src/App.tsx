import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMyLocation } from "./apiCalls";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
function App() {
  getMyLocation("restaurants").then((res) => console.log(res));
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
