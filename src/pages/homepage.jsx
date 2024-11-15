import React from 'react';
import SideBar from '../components/SideBar';
import parkinglot1 from '../assets/parkinglot1.jpg';
import parkinglot2 from '../assets/parkinglot2.jpg';
import parkinglot3 from '../assets/parkinglot3.jpg';

import "../styles/page.css"
import '../styles/Homepage.css';
import ParkingLotCard from '../components/ParkingLotCard';

function Homepage() {
  return (
    <div className="page-with-sidebar-layout">
      <SideBar />
      <main className="page homepage">
        <h1 className="header">Campus Parkings</h1>
        <div className="content">    
          <ParkingLotCard imgSrc={parkinglot1} title="Parking Lot #1" description="Open Spaces: 5" link="/parkingone" />
          <ParkingLotCard imgSrc={parkinglot2} title="Parking Lot #2" description="Open Spaces: 11" link="/parkingtwo" />
          <ParkingLotCard imgSrc={parkinglot3} title="Parking Lot #3" description="Open Spaces: 0" color="red" link="/parkingthree" />
        </div> 
      </main>
    </div>
  );
}

export default Homepage;
