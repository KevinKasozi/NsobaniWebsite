import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './DonationForm'; // Adjust the path as necessary

// Load Stripe using the public key from environment variables defined in Vite's .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/createPaymentIntent')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then(data => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error('Error fetching client secret:', data.error);
        }
      })
      .catch(err => console.error('Error fetching client secret:', err));
  }, []);

  return (
    <Elements stripe={stripePromise}>
      {clientSecret ? <CheckoutForm clientSecret={clientSecret} /> : <p>Loading...</p>}
    </Elements>
  );
};

export default StripeCheckout;
