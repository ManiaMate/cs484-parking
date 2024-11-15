import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ParkingLotPage1 from "./pages/parking-lot-1";
import ParkingLotPage2 from "./pages/parking-lot-2"
import ParkingLotPage3 from "./pages/parking-lot-3"

import "./App.css";
import Homepage from "./pages/homepage";
import ParkingGrid from "./components/ParkingGrid";

function App() {
 
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Homepage /> */}
      {/* <ParkingLotPage1 /> */}
      <ParkingLotPage2 />
      {/* <ParkingLotPage3 /> */}

      
    </div>
  );
}

export default App;
