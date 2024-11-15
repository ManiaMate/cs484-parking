import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";


import ParkingLotPage1 from "./pages/parking-lot-1";
import ParkingLotPage2 from "./pages/parking-lot-2"
import ParkingLotPage3 from "./pages/parking-lot-3"


import Homepage from "./pages/homepage";
import HistoryPage from "./pages/history";
import AveragePage from "./pages/average";


import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/average" element={<AveragePage />} />
        
        <Route path="/parkingone" element={<ParkingLotPage1 />} />
        <Route path="/parkingtwo" element={<ParkingLotPage2 />} />
        <Route path="/parkingthree" element={<ParkingLotPage3 />} />


      </Routes>
    </div>
  );
}

export default App;
