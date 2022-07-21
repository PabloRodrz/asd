import React from 'react'
function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card-container">
      {badgeText && <div className='card--badge'> {badgeText} </div>}
      <img className='card--image' src={props.item.coverImg} alt="profile-pic" />
      <div className="card--stats">
        <img src={window.location.origin + '/images/star.png'} alt="star" className='card--star' />
        <span>{props.item.stats.rating} </span>
        <span className='gray'> ({props.item.stats.reviewCount}) •  </span>
        <span className='gray'> {props.item.location} </span>
      </div>
      <p> {props.item.title} </p>
      <p><span className='bold'>From ${props.item.price} </span> / person </p>
    </div>
  )
}

export default Card