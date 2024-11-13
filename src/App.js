import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";


import "./App.css";

function App() {
  return (  
    <div className="App">
      {/* <Login /> */}
      <Homepage />
    </div>
  );
}

export default App;
