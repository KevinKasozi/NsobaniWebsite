import React from 'react';
import CharityLayout from '../../components/common/CLayout.jsx';
import HeroCarousel from '../../components/common/ChartiyHeroSection.jsx';
import DonateSection from '../../pages/Charity/donatesection.jsx';
import CardSection from '../../pages/Charity/cards.jsx';


function CharityPage() {
  return (
    <CharityLayout>
      <HeroCarousel />
      <CardSection/>
      <div className="p-6">
  
        {/* Add more components as needed */}
      </div>
    </CharityLayout>
  );
}



export default CharityPage;
