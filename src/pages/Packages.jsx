import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Packages = () => {
  const [pack,setPack] = useState([])
  useEffect(()=>{
    axios.get('https://localhost:44372/api/Packages').then((response)=>setPack(response.data))
    

  },[])
  return (
    <div>
      {pack.map((p) => (
        <div key={p.packageId}>
          <img src={`https://localhost:44372/coverImage/${p.coverImage}`}  alt="click me" />
          <h1>{p.packageName}</h1>
        </div>
      ))}
    </div>
  );
};

export default Packages