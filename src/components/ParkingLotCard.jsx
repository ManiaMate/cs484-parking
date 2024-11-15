import React from 'react'
import "../styles/ParkingLotCard.css"
import { useNavigate } from "react-router-dom";

export default function ParkingLotCard({
  imgSrc,
  title,
  description,
  color = "#4CAF50",
  link
}) {

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <a onClick={() => navigate(link)} className="card-link">
          <div className="card">
          <div className="card__strip" style= {{backgroundColor: color}}></div> {/* New green strip */}
          <img src={imgSrc} alt="" className="card__img" />
          <div className="card__body">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
          </div>
          <span className="card-arrow">
            <i class="bx bx-chevron-right"></i>
          </span>
        </div>
      </a>
    </div>
    
  )
}
