// src/pages/Charity/DonationForm.jsx
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import 'tailwindcss/tailwind.css';

const stripePromise = loadStripe('pk_test_51Ob3ClGV56c8mWXUMXXGePPWqbq64ngAtYopjlpVxhtF4hAL4pmox8uUeHzcAPmCkb5gxSofF2cISw74nrVFWmlm00xKDzM9VF');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:8888/success', // Make sure this URL is correct
        receipt_email: email,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg max-w-md mx-auto">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
          className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {message && <div id="payment-message" className="text-red-500 text-xs mt-2">{message}</div>}
    </form>
  );
};

const DonationForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/createPaymentIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#e10505',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default DonationForm;
