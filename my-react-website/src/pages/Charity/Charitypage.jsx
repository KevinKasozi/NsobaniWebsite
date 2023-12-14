import React from 'react';
import CharityLayout from '../../components/common/CLayout.jsx';
import CharityHome from '../Charity/CharityHome.jsx';

function CharityPage() {
  return (
    <CharityLayout>
      <div className="p-6">
        <CharityHome />
        {/* Add more components as needed */}
      </div>
    </CharityLayout>
  );
}

export default CharityPage;
