import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PackageCard from './PackageCard';
// import "./Packages.css";

const FeturedPackages = () => {
    const [feturePack,setFeaturedPack] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_APP_URL}/api/Packages/feutures`)
        .then(response=>setFeaturedPack(response.data))
    },[])
    console.log(feturePack,"feture pack");
  return (
    
    <div>
       <>
        <div className="package-section text-center">
        <div className="package-section-title"><h2>Feutured Packages</h2></div>
        <div className="package-section-subtitle">Take a look at these places</div>
        </div>
        <div className="package-container container-fluid row mt-3">
            {feturePack.map((p)=>(
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
    </div>
  )
}

export default FeturedPackages