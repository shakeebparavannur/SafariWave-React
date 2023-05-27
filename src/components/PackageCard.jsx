import React from 'react'
import './PackageCard.css'
const PackageCard = (props) => {
  console.log(props,'+++++');
  return (
    <div className="package-card">
      <h3>{props.name}</h3>
      <h2>{props.id}</h2>
      <img src={props.image} alt={props.alt} />
      <h5>{props.location}</h5>
      <p>{props.price}</p>
      
    </div>
  )
}
export default PackageCard