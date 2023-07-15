import React from "react";
import "./PackageCard.css";
import MyButton from "./Button";
const PackageCard = ({id,name,image,alt,location,price,offerPrice,btnClass,actions,Btnvalue}) => {
  // console.log(props, "packagecard props")  
  return (
    <div className="package-card">
      <img src={image} alt="" />

    </div>
  );
};
export default PackageCard;
