import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import "./Packages.css";

const Packages = () => {
  const navigate = useNavigate()
  const [pack, setPack] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7254/api/Packages")
      .then((response) => setPack(response.data));
  }, []);
  console.log(pack);
  return (
    <div className="packages-container">
      {pack.map((p) => (
        <div key={p.packId}>
        <PackageCard
          // key={p.packId}
          id={p.packId}
          name={p.packageName}
          image={`https://localhost:7254/Image/${p.image1}`}
          alt={p.name}
          location={p.location}
          price={p.pricePerHead}
          offerPrice={p.offerPrice}
          btnClass="packdetails"
          actions= {()=>navigate(`productdetails/${p.packId}`)}
          Btnvalue="view details"

        />
        </div>
      ))}
    </div>
  );
};

export default Packages;
