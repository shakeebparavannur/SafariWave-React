import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const accessToken = Cookies.get("jwtToken");
const Dashboard = () => {
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const[packageData, setPackageData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/Order/Orders`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setOrderData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/Users/users`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPackageData =async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/Packages`)
            setPackageData(response.data)
        }
        catch(error){
            console.log(error);
        }
    }
    fetchPackageData();
    fetchUserData();
    fetchData();
  }, []);
  return (
    <div className="row justify-content-between align-items-center mb-5 mt-5">
      <div className="col justify-content-between align-items-center flex-shrink-0 mb-5 mb-md-0">
        <h3 className="mb-0 ms-3">Dashboard</h3>
      </div>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <div className="px-5 bg-info">Booking {orderData.length}</div>
        <div className="px-5 bg-info">Regiterd Users {userData.length}</div>
        <div className="px-5 bg-info">Packages {packageData.length}</div>
        <div className="px-5 bg-info">Customers</div>
      </div>
    </div>
  );
};

export default Dashboard;
