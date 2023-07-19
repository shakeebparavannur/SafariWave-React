import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrencyRupee } from "@mui/icons-material";
import './PackageDetails.css';
import rupee from '/static/Rupee.png'
import pricetag from '/static/price-tag.png'
import typeIcon from '/static/types.png'
import minIcon from '/static/add-group.png'
import facility from '/static/travel-and-tourism.png'

import { Typography } from "@mui/material";

const PackageDetails = () => {
  const [packages, setPackage] = useState([]);
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/Packages/package/${id}`
      );
      setPackage(response.data);
    } catch (error) {
      console.error("Error fetching package details:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(packages);
  return (
    <div className="package-details-container container-fluid">
      <div className="cover-image">
        <img src={`${import.meta.env.VITE_APP_URL}/coverImage/${packages.coverImage}`} alt="SafariWave" />
      </div>
      <div className="package-title">
        <h1>{packages.packageName}</h1>
      </div>
      <div className="image-row row">
        <img className="col-lg-3 col-md-6 col-sm-12" src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image1}`} alt="" />
        <img className="col-lg-3 col-md-6 col-sm-12" src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image2}`} alt="" />
        <img className="col-lg-3 col-md-6 col-sm-12" src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image3}`} alt="" />
        <img className="col-lg-3 col-md-6 col-sm-12" src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image4}`} alt="" />
      </div>
      <div className="pack-desc">
        <p>{packages.describtion}</p>
      </div>
      <div className="pack-details row container-fluid">
          <div className="price col-md-2 col-sm-12">
           
            <img className="price-tag" src={pricetag} alt="" />
            Price/Head
            {/* <CurrencyRupee fontSize="large" sx={{top:"2rem",color:"black"}} /> */}
            <div className="price-compare">
            <span className="actual-price">{packages.pricePerHead}</span>
            <span className="offer-price">{packages.offerPrice}/head</span>
            </div>
          </div>
          <div className="package-type col-md-2 col-sm-12">
                <img className="type-icon" src={typeIcon} alt="" />
                {packages.type}
          </div>
          <div className="min-person col-md-3 col-sm-12">
          <img className="type-icon" src={minIcon} alt="" />
              Minimum Persons: {packages.minNoOfPerson}
          </div>
          <div className="pack-facilities col-md-5 col-sm-12">
          <img className="type-icon" src={facility} alt="" />
            Includes:{packages.facilities}
          </div>
      </div>

    </div>
  );
};

export default PackageDetails;
