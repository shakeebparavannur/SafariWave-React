import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PackageCard from '../components/PackageCard';
import './Packages.css'

const Packages = () => {
  const [pack,setPack] = useState([])
  useEffect(()=>{
    axios.get('https://localhost:7254/api/Packages').then((response)=>setPack(response.data))
    

  },[])
  return (
    <div className='packages-container'>
      {pack.map((p) => (
        <PackageCard key={p.id} id={p.packId} name={p.packageName} image = {`https://localhost:44372/coverImage/${p.coverImage}`} alt={p.name} location={p.location} price={p.pricePerHead}/>
      ))}
    </div>
  );
};

export default Packages