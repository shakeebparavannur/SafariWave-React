import React from "react";
import "./PackageCard.css";
import MyButton from "./Button";
const PackageCard = (props) => {
  console.log(props, "packagecard props")
  return (
    <div className="package-card">
      <h3>{props.name}</h3>
      {/* <h2>{props.id}</h2> */}
      <img src={props.image} alt={props.alt} />
      <h5>{props.location}</h5>
      <p className="price">{props.price}</p>
      <p className="offerprice">{props.offerPrice}</p>
      <MyButton
        className={props.btnClass}
        action={props.actions}
        variant={props.variant}
        name={props.btnname}
        type={props.type}
        value={props.Btnvalue}
      />
    </div>
  );
};
export default PackageCard;
