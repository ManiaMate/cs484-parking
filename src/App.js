import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import HistoryPage from "./pages/history";


import "./App.css";

function App() {
  return (  
    <div className="App">
      {/* <Login /> */}
      {/* <Homepage /> */}
      <HistoryPage/>
    </div>
  );
}

export default App;
