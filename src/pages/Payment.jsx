import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/Payment/CheckoutForm";
import { useLocation, useParams } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import Cookies from "js-cookie";

const Payment = () => {
 
  const [bookingData,setBookingData] = useState([])
  const [paymentData,setPaymentData] = useState([])
  const {bookingId} = useParams()
  const token = Cookies.get('jwtToken');
  const fetchBookingDetails = async()=>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/Booking/booking/${bookingId}`,{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      setBookingData(response.data)
      console.log(response.data);
      console.log(bookingData,"bookingDatssss");
    }
    catch(error){
      console.log(error);
    }
  }
  const initPayment = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/Stripe?bookingId=${
          bookingId
        }`
        );
        setPaymentData(response.data.result)
        console.log(response.data.result,"payment result");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookingDetails();
    initPayment();
  }, []);

  // console.log(state);
  const stripePromise = loadStripe(
    "pk_test_51MvCGESEVviESs821BTpl2PRnPvMunC9NragLwJNgOAlSvyKqG5OiSa0Uql4sVzjYJcYxgs611IjZ9NH7YMRS1jk00FefEbh3L"
  );

  if (!paymentData.clientSecret || !bookingData) {
    return <div>Loading...</div>;
  }
  
  const options = {
    // passing the client secret obtained from the server
    clientSecret: paymentData.clientSecret,
  };
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <div className="container m-5 p-5">
          <div className="row">
            <div className="col-md-7">
              <OrderSummary bookingData={bookingData}  />
            </div>
            <div className="col-md-5">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
