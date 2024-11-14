import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import HistoryPage from "./pages/history";
import AveragePage from "./pages/average";

import "./App.css";

function App() {
  return (  
    <div className="App">
      {/* <Login /> */}
      {/* <Homepage /> */}
      {/* <HistoryPage/> */}
      <AveragePage />
    </div>
  );
}

export default App;
