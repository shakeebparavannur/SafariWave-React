import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PackageDetails.css';

const PackageDetails = () => {
  const [packages, setPackage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/api/Packages/package/${id}`)
      .then((res) => setPackage(res.data))
      .catch((error) => {
        // Handle error if the request fails
        console.error('Error fetching package details:', error);
      });
  }, [id]);

  return (
    <div className="package-details-container">
      <div className="cover-image" style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}/image/${packages.image2})` }}></div>
      <div className="package-info">
        <h2 className="package-name">{packages.packageName}</h2>
        <p className="description">{packages.describtion}</p>
        <p className="duration">Duration: {packages.duration} days</p>
        <p className="location">Location: {packages.location}</p>
        <p className="facilities">Facilities: {packages.facilities}</p>
        <p className="price">Price per head: ${packages.pricePerHead}</p>
        <p className="offer-price">Offer price: ${packages.offerPrice}</p>
        <p className="min-persons">Minimum number of persons: {packages.minNoOfPerson}</p>
        <p className="type">Type: {packages.type}</p>
        <p className="country">Country: {packages.country}</p>
      </div>
    </div>
  );
};

export default PackageDetails;
