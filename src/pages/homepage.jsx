import React from 'react';
import SideBar from '../components/SideBar';
import parkinglot1 from '../assets/parkinglot1.jpg';
import parkinglot2 from '../assets/parkinglot2.jpg';
import parkinglot3 from '../assets/parkinglot3.jpg';

import '../styles/Homepage.css';
import ParkingLotCard from '../components/ParkingLotCard';

function Homepage() {
  return (
    <div className="homepage">
      <SideBar />
      <div className="content">        
        {/* Add Parking Lot Card here */}
        {/* <ParkingLotCard /> */}
        <h1 className='header'>Campus Parkings</h1>
        <ParkingLotCard imgSrc={parkinglot1} 
          title="Parking Lot #1"
          description="Open Spaces: 10"
        />

        <ParkingLotCard imgSrc={parkinglot2}
          title="Parking Lot #2"
          description="Open Spaces: 0"
        />

        <ParkingLotCard imgSrc={parkinglot3}
          title="Parking Lot #3"
          description="Open Spaces: 5"
        />
            
      </div>
    </div>
  );
}

export default Homepage;
