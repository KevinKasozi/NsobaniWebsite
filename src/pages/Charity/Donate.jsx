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
        return_url: 'http://localhost:8888/success',
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
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Support Our Cause</h2>
      <p className="text-gray-600 mb-6 text-center">
        Your generous donation helps us provide life-saving treatments and continue our mission. 
        All payments are securely processed through Stripe.
      </p>
      <div className="flex justify-center mb-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Stripe_Logo%2C_revised_2016.png" alt="Stripe" className="h-8" />
      </div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
          </span>
        </button>
        {message && <div id="payment-message" className="text-red-500 text-xs mt-2">{message}</div>}
      </form>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          We use Stripe for secure payment processing. Your information is encrypted and securely processed.
        </p>
        <div className="flex justify-center mt-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/256-bit_Encryption.svg/1200px-256-bit_Encryption.svg.png" alt="Encryption" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pci-dss.svg/1200px-Pci-dss.svg.png" alt="PCI DSS" className="h-8 ml-4" />
        </div>
      </div>
    </div>
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
