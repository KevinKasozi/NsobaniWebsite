import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './donatesection'; // Adjust the path as necessary

// Load Stripe using the public key from environment variables defined in Vite's .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = () => {
  // clientSecret might be fetched from a server endpoint and passed as a prop
  const clientSecret = ""; // Add your logic to fetch the client secret

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
};

export default StripeCheckout;
