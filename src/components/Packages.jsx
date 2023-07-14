import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PackageCard from "./PackageCard";
import "./Packages.css";


const Packages = () => {
  const navigate = useNavigate();
  const [pack, setPack] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/api/Packages`)
      .then((response) => setPack(response.data));
  }, []);
  console.log(pack);
  return (
    <div className="packages-container">
      {pack.map((p) => (
        <div key={p.packId} className="package-container-card">
          <PackageCard
            id={p.packId}
            name={p.packageName}
            image={`${import.meta.env.VITE_APP_URL}/Image/${p.image1}`}
            alt={p.name}
            location={p.location}
            price={p.pricePerHead}
            offerPrice={p.offerPrice}
            btnClass="packdetails"
            actions={() => navigate(`productdetails/${p.packId}`)}
            Btnvalue="view details"
          />
        </div>
      ))}
    </div>
  );
};

export default Packages;
