import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProceedPayment = () => {
  const [secretKey, setSecretKey] = useState("");
  const [bookingData, setBookingDta] = useState({});
  const token = Cookies.get("jwtToken");
  const navigate = useNavigate();
  const { bookingId } = useParams();
  console.log(bookingId);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/Booking/booking/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookingDta(response.data);
      console.log(response.data);
    //   setSecretKey(response.data.clientSecret);
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  };
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/Stripe?bookingId=${bookingData.bookingId}`,
      );
      
      console.log(response.data);
      console.log(response.data.result.clientSecret, "secret new");
      setSecretKey(response.data.result.clientSecret);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    
    if (secretKey && bookingData.bookingId) {
      console.log(secretKey, "secret key");
      navigate(`/payment/${bookingData.bookingId}`, {
        state: { secretKey },
      });
    }
  }, [secretKey, bookingData.bookingId]);
  return (
    <div className="container">
      <div className="bookingItem">
        <span>ID: {bookingData.bookingId}</span>
        <span>Date: {bookingData.dateOfTrip}</span>
        <span>Name: {bookingData.userId}</span>
        <span>No of Person: {bookingData.noOfPerson}</span>
        <span>Price: {bookingData.amount}</span>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default ProceedPayment;
