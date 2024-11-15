import React, { useState } from 'react';
import '../styles/ParkingGrid.css';
import CarImg from '../assets/white_car.png';
import { FaTimesCircle } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";


function ParkingGrid({ parkingSpots, onSpotSelect, floors, onUnreserve }) {
  const [selectedFloor, setSelectedFloor] = useState(floors?.[0] || null);
    
  const handleSpotClick = (spotId) => {
    onSpotSelect(spotId);
    console.log(spotId);
  };

  const navigate = useNavigate();

  return (
    <main className="page parking">
      <div className="back-arrow">
        <a onClick={() => navigate("/homepage")}>
          <i className='bx bx-left-arrow-circle'></i>
        </a>
      </div>

      <h1 className="header">Choose Spot</h1>
      
      {/* Conditionally render floor selector if floors exist */}
      {floors && floors.length > 0 && (
        <select
          className="floor-selector"
          value={selectedFloor}
          // this runs when the user selects a different floor
          onChange={(e) => setSelectedFloor(e.target.value)}
        >
          {floors.map((floor, index) => (
            <option key={index} value={floor}>
              {floor}
            </option>
          ))}
        </select>
      )}

      <div className="parking-grid">
        {parkingSpots
          .filter((spot) => !floors || spot.floor === selectedFloor) // Only display spots for the selected floor
          .map((spot) => (
            <div
              key={spot.id}
              className={`parking-spot ${spot.status} ${spot.claimed ? 'claimed' : ''}`}
              onClick={spot.status === 'available' ? () => handleSpotClick(spot.id) : null}
            >
              <p className="spot-id">{spot.id}</p>
              
              {spot.claimed ? (
                <div className="reserved-content">
                  <span className="reserved-user">Reserved</span>
                  {/* Unclaim button with an icon */}
                  <button
                    className="unclaim-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents parent click event
                      onUnreserve(spot.id);
                    }}
                  >
                    <FaTimesCircle className="unclaim-icon" /> Cancel
                  </button>
                </div>
              ) : spot.status === 'available' ? (
                <p className="available-text">Open</p>
              ) : (
                <img src={CarImg} alt="Car" className="car-icon" />
              )}
            </div>
          ))}
      </div>
    </main>
  );
}

export default ParkingGrid;
