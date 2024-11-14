import { React, useState } from "react";
import SideBar from "../components/SideBar";
import ParkingLotCard from "../components/ParkingLotCard"; // Import the ParkingLotCard component
import parkinglot1 from "../assets/parkinglot1.jpg";
import parkinglot2 from "../assets/parkinglot2.jpg";
import parkinglot3 from "../assets/parkinglot3.jpg";

import "../styles/page.css";
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
    <main className="page history">
    <h1 className="header">Parking History</h1>
    <div className="accordion">
      {parkingHistory.map((lot, i) => (
        <div key={i} className="history">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{lot.date}</h2>
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
                  <strong>Lot:</strong> {history.lotNumber}
                </p>
                <p>
                  <strong>Time:</strong> {history.time}
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
    </main>
  </div>
);
}


const parkingHistory = [
  {
    date: "November 13, 2024",
    history: [
      {
        lotNumber: "Parking Lot #3",
        time: "1:00 PM - 2:00 PM",
        spot: "F-15",
      },
      {
        lotNumber: "Parking Lot #2",
        time: "3:00 PM - 4:00 PM",
        spot: "F-15",
      }
    ]
  },
  {
    date: "November 12, 2024",
    history: [
      {
        lotNumber: "Parking Lot #2",
        time: "8:00 AM - 10:00 AM",
        spot: "C-10",
      },
      {
        lotNumber: "Parking Lot #1",
        time: "2:00 PM - 4:00 PM",
        spot: "D-8",
      },
      {
        lotNumber: "Parking Lot #3",
        time: "6:00 PM - 8:00 PM",
        spot: "B-10",
      }
    ]
  },
  {
    date: "November 11, 2024",
    history: [
      {
        lotNumber: "Parking Lot #1",
        time: "6:30 AM - 7:30 AM",
        spot: "A-33",
      },
      {
        lotNumber: "Parking Lot #1",
        time: "3:00 PM - 5:00 PM",
        spot: "B-22",
      }
    ]
  }
];

export default HistoryPage;
