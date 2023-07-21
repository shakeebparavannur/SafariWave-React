import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrencyRupee } from "@mui/icons-material";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { AccessTime } from "@mui/icons-material";
import Groups2Icon from "@mui/icons-material/Groups2";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import "./PackageDetails.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import rupee from "/static/Rupee.png";
import pricetag from "/static/price-tag.png";
import typeIcon from "/static/types.png";
import minIcon from "/static/add-group.png";
import facility from "/static/travel-and-tourism.png";

import { Typography } from "@mui/material";

const PackageDetails = () => {
  const [packages, setPackage] = useState([]);
  const [facilities, setFacilities] = useState("");
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/Packages/package/${id}`
      );
      setPackage(response.data);
      setFacilities(response.data.facilities);
      setCount(response.data.minNoOfPerson);
      setCost(response.data.offerPrice * response.data.minNoOfPerson);
    } catch (error) {
      console.error("Error fetching package details:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(()=>{
    setCost(count*packages.offerPrice)
  },[count,packages.offerPrice]);
  const handleInrement = () => {
    setCount((count) => count + 1);
    
  };
  const handleDecrement = () => {
    if (count <= 2) {
      window.alert(`Minimum No of person is ${packages.minNoOfPerson}`);
    } else {
      setCount((count) => count - 1);
      
    }
  };
  console.log(packages);
  console.log(facilities);
  console.log(count, "count");
  return (
    <div className="package-details-container container-fluid">
      <div className="cover-image">
        <img
          src={`${import.meta.env.VITE_APP_URL}/coverImage/${
            packages.coverImage
          }`}
          alt="SafariWave"
        />
      </div>
      <div className="package-title">
        <h1>{packages.packageName}</h1>
      </div>
      <div className="image-row row">
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image1}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image2}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image3}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6  col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image4}`}
          alt=""
        />
      </div>
      <div className="pack-desc">
        <h1>About this tour</h1>
        <p>{packages.describtion}</p>
      </div>

      <div className="details-row row">
        <div className="duration col-md-3 mt-2 col-sm-6">
          <div className="item d-flex ">
            <div className="icon">
              <AccessTime />
            </div>
            <div className="info">
              <div className="info-name">Duration</div>
              <div className="info-value">{packages.duration} days</div>
            </div>
          </div>
        </div>
        <div className="package-type col-md-3 mt-2 col-sm-6 ">
          <div className="item d-flex ">
            <div className="icon">
              <CardTravelIcon />
            </div>
            <div className="info">
              <div className="info-name">Type</div>
              <div className="info-value">{packages.type}</div>
            </div>
          </div>
        </div>
        <div className="min-person col-md-3 mt-2 col-sm-6 ">
          <div className="item d-flex ">
            <div className="icon">
              <Groups2Icon />
            </div>
            <div className="info">
              <div className="info-name">Group Size</div>
              <div className="info-value">{packages.minNoOfPerson}</div>
            </div>
          </div>
        </div>
        <div className="min-person col-md-3 mt-2 col-sm-6">
          <div className="item d-flex ">
            <div className="icon">
              <MyLocationIcon />
            </div>
            <div className="info">
              <div className="info-name">Location</div>
              <div className="info-value">{packages.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info row">
        <div className="facilities col-md-8 col-sm-12">
          <div className="info-name">
            <h1>Includes:</h1>
          </div>
          <div className="info-value">
            <ul>
              {facilities.split(",").map((fac, id) => (
                <li className="facility-list" key={id}>
                  <CheckBoxIcon />
                  {fac}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="book-form col-md-4">
          <div className="booking-price d-flex align-self-end">
            <span className="align-self-end">From: </span>
            <span className="price d-flex align-content-end flex-column">
              <span className="text-lg">&nbsp;&nbsp;{packages.offerPrice}</span>
            </span>
          </div>
          <div className="form-div">
            <div className="form-date d-flex align-item-center justify-content-between">
              <div className="info-title">Choose the date</div>
              <div className="info-action">
                <input type="date" />
              </div>
            </div>
            <div className="form-person d-flex align-item-center justify-content-between">
              <div className="form-info-title">No of person</div>
              <div className="info-action">
                <button onClick={() => handleInrement()}>+</button>
                {count}
                <button onClick={() => handleDecrement()}>-</button>
              </div>
            </div>
            <div className="total-price d-flex align-item-center justify-content-between">
              <div className="form-info-title">Total Amount</div>
              <div className="info-action">{cost}</div>
            </div>
            <div className="form-submit d-flex align-item-center justify-content-center">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
