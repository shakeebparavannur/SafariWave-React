import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import PackageCard from "./PackageCard";
import "./Packages.css";
import Loading from "./Loading/Loading";


const Packages = () => {
  // const navigate = useNavigate();
  const [pack, setPack] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/api/Packages`)
      .then((response) => {
        setPack(response.data);
        setTimeout(()=>{
          setLoading(false);
        },3000)
        
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
        setTimeout(()=>{
          setLoading(false);
        },3000)
      });
  }, []);
  console.log(pack);
  return (
    <>
    {loading?(<Loading/>):(
      <>
    <div className="package-section text-center">
    <div className="package-section-title"><h2>Popular Destination</h2></div>
    <div className="package-section-subtitle">Take a look at these offers</div>
    </div>
    <div className="package-container container-fluid row mt-3">
      {pack.map((p) => (
          
        <div key={p.packId} className="package-container-card col-lg-3 col-md-6 mt-3">
          <Link to={`productdetails/${p.packId}`}>
          <PackageCard
            id={p.packId}
            name={p.packageName}
            image={`${import.meta.env.VITE_APP_URL}/Image/${p.image1}`}
            alt={p.name}
            location={p.location}
            price={p.pricePerHead}
            offerPrice={p.offerPrice}
            btnClass="packdetails"
            // actions={() => navigate(`productdetails/${p.packId}`)}
            Btnvalue="view details"
          />
          </Link>
        </div>
        
      ))}
    </div>
    </>
    )}
    
    </>
  );
};

export default Packages;
