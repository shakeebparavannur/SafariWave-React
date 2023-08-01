import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ModalWindow from "../Modal";

const CheckoutForm = ({ bookingData,paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOrderSuccess = () => {
    
    setShowModal(true);
  };

  const handleCloseModal = () => {
    
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      redirect:"if_required"
    });
    console.log(result);

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toast.error("An error occurred");
      setIsProcessing(false);
      console.log(result.error.message);
    } else {
      console.log(result);
      //  "id": 0,
      // "bookingId": 0,
      // "date_of_Trip": "2023-08-01T05:11:20.135Z",
      // "status": "string",
      // "amount": 0,
      // "paymentStatus": "string",
      // "stripePaymentIntentId": "string"
      const reqData ={
        bookingId:bookingData.bookingId,
        dateOfTrip:bookingData.dateOfTrip,
        status:"order placed",
        amount:bookingData.amount,
        paymentStatus:result.paymentIntent.status,
        stripePaymentIntentId:paymentData.stripePaymentIntentId
      }
      try{
        const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/Order/PlaceOrder`,reqData)
        console.log(response,"orderplaced response");
        handleOrderSuccess();
      }
      catch(errors){
        console.log(errors);
      }
      
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
      <ModalWindow showModal={showModal} onClose={handleCloseModal}/>
    </form>
  );
};

export default CheckoutForm;
