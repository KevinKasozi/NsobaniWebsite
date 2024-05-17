import React, { useState, useEffect } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'tailwindcss/tailwind.css';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(false);
  }, [stripe, elements]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      // Assuming payment is configured correctly
    });

    if (error) {
      console.error(error);
      setError('Payment failed');
      setIsLoading(false);
    } else {
      // Handle successful payment
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading && <div>Loading payment details...</div>}
      {!isLoading && (
        <>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <PaymentElement />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            {isLoading ? 'Processing...' : 'Pay now'}
          </button>
          {error && <div>{error}</div>}
        </>
      )}
    </form>
  );
};

export { DonationForm };
