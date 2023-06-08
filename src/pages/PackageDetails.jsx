import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const PackageDetails = () => {
    const [packages,setPackage] = useState({})
    const {id} = useParams();
    axios.get(`https://localhost:7254/api/Packages/package/${id}`).then((res)=>setPackage(res.data));
  return (
    
    <div>
        <img src={`https://localhost:7254/coverImage/${packages.image2}`}/>
        {packages.packageName}
    </div>
  )
}

export default PackageDetails