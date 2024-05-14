// src/pages/Charity/Charitypage.jsx
import React, { useState, useEffect } from 'react';
import CharityLayout from '../../components/common/CLayout.jsx';
import HeroCarousel from '../../components/common/ChartiyHeroSection.jsx';
import CardSection from './cards.jsx';
import DonationForm from './DonationForm.jsx';

const CharityPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/createPaymentIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }] })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error('Error fetching client secret:', err));
  }, []);

  return (
    <CharityLayout>
      <HeroCarousel />
      <CardSection />
      <div className="p-6">
        {clientSecret && <DonationForm clientSecret={clientSecret} />}
      </div>
    </CharityLayout>
  );
};

export default CharityPage;
