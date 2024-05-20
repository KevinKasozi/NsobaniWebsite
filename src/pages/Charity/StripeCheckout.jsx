// src/pages/Charity/StripeCheckout.jsx
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonationForm from './DonationForm'; // Ensure the path is correct

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await fetch('/.netlify/functions/createPaymentIntent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }], shippingAddress: { name: 'John Doe', line1: '123 Main St', city: 'San Francisco', state: 'CA', postal_code: '94111', country: 'US' } })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log('Fetched client secret:', data.clientSecret);

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Client secret not found in response');
        }
      } catch (err) {
        setError('Error fetching client secret: ' + err.message);
        console.error('Error fetching client secret:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentIntent();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <DonationForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default StripeCheckout;
