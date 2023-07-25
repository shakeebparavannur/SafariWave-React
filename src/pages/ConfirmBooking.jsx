import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [date, setDate] = useState(state.bookindDetails.date);
  const [numOfPerson, setNumOfPerson] = useState(
    state.bookindDetails.numOfPerson
  );
  const [totalAmount, setTotalAmount] = useState(
    state.bookindDetails.totalamount
  );
  useEffect(() => {
    setTotalAmount(numOfPerson * state.bookindDetails.price);
  }, [numOfPerson]);
  const handleInrement = () => {
    setNumOfPerson((numOfPerson) => numOfPerson + 1);
  };
  const handleDecrement = () => {
    if (numOfPerson <= state.bookindDetails.minPerson) {
      window.alert(`Minimum No of person is ${state.bookindDetails.minPerson}`);
    } else {
      setNumOfPerson((numOfPerson) => numOfPerson - 1);
    }
  };
  const handleBooking = async () => {
    const reqData = {
      packageId: state.bookindDetails.packId,
      dateOfTrip: date,
      noOfPerson: numOfPerson,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/Booking/BookPackage`,
        reqData
      );
      console.log(response.data);
      
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(state);
  return (
    <div className="confirmation-container">
      <h1 className="confirmation-title">Booking Confirmation</h1>
      <div className="confirmation-details">
        <div className="input-row d-flex align-item-center justify-content-between">
          <label className="info-title">Date:</label>
          <div className="info-action">
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="input-row d-flex align-item-center justify-content-between">
          <div className="info-title">
            <label>No of person:</label>
          </div>
          <div className="info-action">
            <button onClick={() => handleInrement()}>+</button>
            <label>{numOfPerson}</label>
            <button onClick={() => handleDecrement()}>-</button>
          </div>
        </div>
        <div className="input-row d-flex align-item-center justify-content-between">
          <div className="info-title">
            <label>Total Cost:</label>
          </div>
          <div className="info-action">{totalAmount}</div>
        </div>
      </div>
      <button className="payment-button">Proceed to Payment</button>
    </div>
  );
};

export default ConfirmBooking;
