import React, { useState } from 'react'
import userImage from '../assets/user-img.jpg'
import '../styles/SideBar.css'


function SideBar() {

    // keep track of when user click sidebar menu
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(!isActive);
    };

  return (
    // changes className if user clicks on menu
    // if true, 'sidebar' -> 'sidebar active'
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="top">
        <div className="logo">
          <i className="bx bxs-car"></i>
          <span>Poly Parking</span>
        </div>
      </div>
      <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      <div className="user">
        <img src={userImage} alt="user" className="user-img" />
        <div>
          <p className="bold">Silas Hsu</p>
        </div>
      </div>
      <ul>
        <li>
          <a href="#">
            <i className="bx bxs-grid-alt"></i>
            <span className="nav-item">Home</span>
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-history"></i>
            <span className="nav-item">History</span>
          </a>
          <span className="tooltip">History</span>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-calculator"></i>
            <span className="nav-item">Average</span>
          </a>
          <span className="tooltip">Average</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-log-out"></i>
            <span className="nav-item">Logout</span>
          </a>
          <span className="tooltip">Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar
