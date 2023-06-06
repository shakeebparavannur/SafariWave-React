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
        <PackageCard
          key={p.id}
          id={p.packId}
          name={p.packageName}
          image={`https://localhost:7254/coverImage/${p.coverImage}`}
          alt={p.name}
          location={p.location}
          price={p.pricePerHead}
          offerPrice={p.offerPrice}
          btnClass="packdetails"
          actions= {()=>navigate(`productdetails/${p.packId}`)}
          Btnvalue="view details"

        />
      ))}
    </div>
  );
};

export default Packages;
