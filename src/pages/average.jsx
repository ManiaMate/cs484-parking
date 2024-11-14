import { React, useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/AveragePage.css";

function Average() {
  const [isDayVisible, setDayActive] = useState(false);
  const [isTimeVisible, setTimeActive] = useState(false);
  const [selectedDay, setDaySelected] = useState(""); // Store the selected day
  const [selectedTime, setTimeSelected] = useState(""); // Store the selected time
  const [isLotVisible, setLotActive] = useState(false);
  const [selectedLot, setLotSelected] = useState(""); // Store the selected day
  const [showTable, setShowTable] = useState(false); // To show the table after clicking search
  const [tableData, setTableData] = useState([]); // Store table data
  const [tableHeaders, setTableHeaders] = useState({lot:"", day: "", time: "" }); // Store table headers

  // Function to generate random average open spots between 12 and 20
  const getRandomNumber = () => Math.floor(Math.random() * 9) + 12;

  // Function to generate time intervals
  const generateIntervals = (startHour, endHour) => {
    const timeSlots = [];
    let currentHour = startHour;

    // Generate intervals for the selected hour range (e.g., 7:00 - 8:00)
    while (currentHour < endHour || (currentHour == 12 && endHour == 1)) {
      const nextHour = currentHour + 1;

      // Add 10-minute intervals for the current hour
      for (let i = 0; i < 6; i++) {
        const startMinutes = (i * 10).toString().padStart(2, "0");
        const endMinutes = ((i + 1) * 10).toString().padStart(2, "0");
        if (endMinutes >= 60) {
          if (endHour == 1) {
            timeSlots.push({
              time: `${currentHour}:${startMinutes} - ${endHour}:00`,
            });
          } else {
            timeSlots.push({
              time: `${currentHour}:${startMinutes} - ${nextHour}:00`,
            });
          }
        } else {
          timeSlots.push({
            time: `${currentHour}:${startMinutes} - ${currentHour}:${endMinutes}`,
          });
        }
      }
      currentHour = nextHour;
    }

    return timeSlots;
  };

  // Function to parse the selected time (e.g., "7:00 - 8:00") into hours
  const parseTime = (timeStr) => {
    const [start, end] = timeStr.split(" - ");
    const startHour = parseInt(start.split(":")[0]);
    const endHour = parseInt(end.split(":")[0]);

    return { startHour, endHour };
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (selectedLot && selectedDay && selectedTime) {
      const { startHour, endHour } = parseTime(selectedTime);
      const timeSlots = generateIntervals(startHour, endHour);
      const data = timeSlots.map((slot) => ({
        time: slot.time,
        averageOpenSpots: getRandomNumber(),
      }));

      setTableData(data);
      setTableHeaders({lot: selectedLot, day: selectedDay, time: selectedTime }); // Store the selected day and time for headers
      setShowTable(true);
    } else {
      alert("Please select both a day and time.");
    }
  };

  return (
    <div className="Average-Wrapper">
      <SideBar />
      <h1 className="header">Find Average Open Spots</h1>
      <div className="all-buttons">
        <div className="lot-dropdown">
          <button
            className="lot-dropdown-btn"
            onClick={() => setLotActive(!isLotVisible)}
          >
            {selectedLot ? selectedLot : "Select Lot"}{" "}
            <span>
              {isLotVisible ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i className="bx bx-chevron-right"></i>
              )}
            </span>
          </button>
          {isLotVisible && (
            <div className="lot-dropdown-content">
              {parkinglots.map((lot, index) => (
                <div
                  key={index}
                  className="lot-dropdown-item"
                  onClick={() => {
                    setLotSelected(lot);
                    setLotActive(false);
                  }}
                >
                  {lot}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="day-dropdown">
          <button
            className="day-dropdown-btn"
            onClick={() => setDayActive(!isDayVisible)}
          >
            {selectedDay ? selectedDay : "Select Day"}{" "}
            <span>
              {isDayVisible ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i className="bx bx-chevron-right"></i>
              )}
            </span>
          </button>

          {isDayVisible && (
            <div className="day-dropdown-content">
              {days.map((day, index) => (
                <div
                  key={index}
                  className="day-dropdown-item"
                  onClick={() => {
                    setDaySelected(day);
                    setDayActive(false);
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="time-dropdown">
          <button
            className="time-dropdown-btn"
            onClick={() => setTimeActive(!isTimeVisible)}
          >
            {selectedTime ? selectedTime : "Select Time"}{" "}
            <span>
              {isTimeVisible ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i className="bx bx-chevron-right"></i>
              )}
            </span>
          </button>

          {isTimeVisible && (
            <div className="time-dropdown-content">
              {times.map((time, index) => (
                <div
                  key={index}
                  className="time-dropdown-item"
                  onClick={() => {
                    setTimeSelected(time);
                    setTimeActive(false);
                  }}
                >
                  {time}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="search">
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {showTable && (
        <div className="table-container">
          <h2>
            {tableHeaders.lot} - {tableHeaders.day} : {tableHeaders.time}
          </h2>{" "}
          <table className="average-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Average Open Spots</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td>{row.averageOpenSpots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Days and Times Arrays
const parkinglots = [
    "Parking Lot 1",
    "Parking Lot 2",
    "Parking Lot 3"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const times = [
  "7:00 - 8:00",
  "8:00 - 9:00",
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 1:00",
  "1:00 - 2:00",
  "2:00 - 3:00",
  "3:00 - 4:00",
  "4:00 - 5:00",
  "5:00 - 6:00",
  "6:00 - 7:00",
];

export default Average;
