import React from "react";
import "./PackageCard.css";
import MyButton from "./Button";
import { Link } from "react-router-dom";
const PackageCard = ({id,name,image,alt,location,price,offerPrice,btnClass,actions,Btnvalue}) => {
  // console.log(props, "packagecard props")  
  return (
    
    <div className="package-card" >
      <img src={image} alt={alt} />
      <div className="pack-data">
        <div className="pack-price">From ${offerPrice}</div>
        <div className="pack-place">{location}</div>
      </div>
    </div>
    
  );
};
export default PackageCard;
