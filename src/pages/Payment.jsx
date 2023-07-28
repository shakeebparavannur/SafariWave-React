import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/Payment/CheckoutForm';
import { useLocation } from 'react-router-dom';


const Payment = () => {
  const { state } = useLocation();
  console.log(state);
    const stripePromise = loadStripe('pk_test_51MvCGESEVviESs821BTpl2PRnPvMunC9NragLwJNgOAlSvyKqG5OiSa0Uql4sVzjYJcYxgs611IjZ9NH7YMRS1jk00FefEbh3L')
    const options = {
        // passing the client secret obtained from the server
        clientSecret: state.secretKey,
      };
    return (
    <div>
        <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    </div>
  )
}

export default Payment