// src/pages/Charity/DonationForm.jsx
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import 'tailwindcss/tailwind.css';

const DonationForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://127.0.0.1:5173/charity',
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else {
      // Handle successful payment
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Donate</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment-element">
          Card Details
        </label>
        <div id="payment-element" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <PaymentElement />
        </div>
      </div>
      <button
        disabled={isLoading || !stripe}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
      >
        {isLoading ? <div className="spinner" id="spinner"></div> : 'Donate now'}
      </button>
      {message && <div className="text-red-500 text-xs mt-2">{message}</div>}
    </form>
  );
};

export default DonationForm;
