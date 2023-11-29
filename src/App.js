// import logo from "./logo.svg";
// import "./App.css";

import Navbar from "./components/navbar/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
