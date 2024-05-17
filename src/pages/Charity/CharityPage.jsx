import React, { useEffect, useState } from 'react';
import CharityLayout from '../../components/common/CLayout';
import HeroCarousel from '../../components/common/ChartiyHeroSection';
import CardSection from './cards';
import { DonationForm } from './Donate';  // Correct import statement
import OurImpact from './OurImpact';
import GetInvolved from './GetInvolved';
import TestimonialsSection from './Testimonials';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

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
      <CardSection theme="charity" />
      <OurImpact theme="charity" />
      <GetInvolved theme="charity" />
      <TestimonialsSection theme="charity" />
      <div className="p-6 max-w-2xl mx-auto">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <DonationForm />
          </Elements>
        )}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
