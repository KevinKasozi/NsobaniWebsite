// src/pages/Charity/CharityPage.jsx
import React, { useEffect, useState } from 'react';
import CharityLayout from '../../components/common/CLayout';
import HeroCarousel from '../../components/common/ChartiyHeroSection';
import CardSection from './cards';
import CheckoutForm from './DonationForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51Ob3ClGV56c8mWXUMXXGePPWqbq64ngAtYopjlpVxhtF4hAL4pmox8uUeHzcAPmCkb5gxSofF2cISw74nrVFWmlm00xKDzM9VF');

const CharityPage = ({ activeTab, setActiveTab }) => {
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
    <CharityLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <HeroCarousel />
      <CardSection />
      <div className="p-6">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
