import React from 'react'
import "../styles/ParkingLotCard.css"

export default function ParkingLotCard({
  imgSrc,
  title,
  description,
  link
}) {
  return (
    <div className="wrapper">
      <a href="#" className="card-link">
          <div className="card">
          <img src={imgSrc} alt="" className="card__img" />
          <div className="card__body">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
          </div>
        </div>
      </a>
    </div>
    
  )
}
