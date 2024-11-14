import React from 'react'
import "../styles/ParkingLotCard.css"

export default function ParkingLotCard({
  imgSrc,
  title,
  description,
  color = "#4CAF50",
  link
}) {
  return (
    <div className="wrapper">
      <a href="#" className="card-link">
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
