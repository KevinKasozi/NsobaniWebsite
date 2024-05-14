import React, { useState, useEffect } from 'react';
import CharityLayout from '../../components/common/CLayout.jsx';
import HeroCarousel from '../../components/common/ChartiyHeroSection.jsx';
import CardSection from './cards.jsx';
import DonationForm from './DonationForm.jsx';

const CharityPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/createPaymentIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }] })
    })
      .then(res => {
        console.log('Response status:', res.status); // Log the response status
        return res.json();
      })
      .then(data => {
        console.log('Response data:', data); // Log the response data
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError('Error fetching client secret: ' + (data.error || 'Unknown error'));
          console.error('Error fetching client secret:', data.error);
        }
      })
      .catch(err => {
        setError('Error fetching client secret: ' + err.message);
        console.error('Error fetching client secret:', err);
      });
  }, []);

  return (
    <CharityLayout>
      <HeroCarousel />
      <CardSection />
      <div className="p-6">
        {error ? <p>Error: {error}</p> : clientSecret ? <DonationForm clientSecret={clientSecret} /> : <p>Loading...</p>}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
