import React, { useEffect, useState } from 'react';
import CharityLayout from '../../components/common/CLayout';
import HeroCarousel from '../../components/common/ChartiyHeroSection';
import CardSection from './cards';
import DonationForm from './Donate';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CharityPage = ({ activeTab, setActiveTab }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await fetch('/.netlify/functions/createPaymentIntent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: 'item1', amount: 1000 }],
            shippingAddress: {
              name: 'John Doe',
              line1: '123 Main St',
              city: 'San Francisco',
              state: 'CA',
              postal_code: '94111',
              country: 'US',
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError('Error fetching client secret: ' + err.message);
        console.error('Error fetching client secret:', err);
      }
    };

    fetchPaymentIntent();
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: { colorPrimary: '#e10505' },
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
        {error && <p className="text-red-500">{error}</p>}
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <DonationForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
