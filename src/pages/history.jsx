import { React, useState } from "react";
import SideBar from "../components/SideBar";
import ParkingLotCard from "../components/ParkingLotCard"; // Import the ParkingLotCard component
import parkinglot1 from "../assets/parkinglot1.jpg";
import parkinglot2 from "../assets/parkinglot2.jpg";
import parkinglot3 from "../assets/parkinglot3.jpg";

import "../styles/HistoryPage.css";

function HistoryPage() {
    
  const [selected, setSelected] = useState(null);
// const [isActive, setIsActive] = useState(false);    
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null); // Close the selected card
    }
    setSelected(i); // Otherwise, open the new card
  };

return (
  <div className="history-wrapper">
    <SideBar />
    <h1 className="header">Parking History</h1>
    <div className="accordion">
      {parkingHistory.map((lot, i) => (
        <div key={i} className="history">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{lot.lotNumber}</h2>
            {/* Toggle symbol for expanded/collapsed state */}
            <span>
              {selected === i ? (
                <i class="bx bx-chevron-down"></i>
              ) : (
                <i class="bx bx-chevron-right"></i>
              )}
            </span>
          </div>

          {/* Accordion Content for each Parking Lot's history */}
          <div
            className={
              selected === i ? "history-content show" : "history-content"
            }
          >
            {lot.history.map((history, index) => (
              <div key={index} className="history-detail">
                <p>
                  <strong>Time:</strong> {history.time}
                </p>
                <p>
                  <strong>Date:</strong> {history.date}
                </p>
                <p>
                  <strong>Spot:</strong> {history.spot}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);


}

const parkingHistory = [
  {
    lotNumber: "Parking Lot #1",
    imgSrc: parkinglot1,
    history: [
      {
        time: "6:30 AM - 7:30 AM",
        date: "October 23, 2023",
        spot: "A-33",
      },
      {
        time: "6:30 AM - 7:30 AM",
        date: "October 24, 2023",
        spot: "B-13",
      },
      {
        time: "10:30 PM - 7:30 AM",
        date: "December 23, 2023",
        spot: "C-32",
      },
    ],
  },
  {
    lotNumber: "Parking Lot #2",
    imgSrc: parkinglot2,
    history: [
      {
        time: "1:00 PM - 2:00 PM",
        date: "January 01, 2022",
        spot: "F-15",
      },
      {
        time: "3:00 PM - 4:00 PM",
        date: "March 01, 2024",
        spot: "F-15",
      },
    ],
  },
  {
    lotNumber: "Parking Lot #3",
    imgSrc: parkinglot3,
    history: [
      {
        time: "3:00 PM - 6:00 PM",
        date: "February 13, 2023",
        spot: "B-02",
      },
      {
        time: "3:00 PM - 4:00 PM",
        date: "May 25, 2024",
        spot: "E-01",
      },
    ],
  },
];

export default HistoryPage;
