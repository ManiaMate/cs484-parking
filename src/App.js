import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";


import "./App.css";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Homepage />
    </div>
  );
}

export default App;
