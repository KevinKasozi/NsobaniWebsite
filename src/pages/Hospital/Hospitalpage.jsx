// src/pages/Hospital/HospitalPage.jsx
import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import HospitalLayout from '../../components/common/HLayout';
import HeroCarousel from '../../components/carousel';
import HospitalFeatures from './HospitalFeatures';
import Stats from './Statistic';

const contentfulSpaceId = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

function HospitalPage({ activeTab, setActiveTab }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client.getEntries({ content_type: 'hospitalPageContent' })
      .then((response) => {
        if (response.items.length > 0) {
          setContent(response.items[0].fields);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <HospitalLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <HeroCarousel />
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {content.welcomeTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {content.paragraph1}
          </p>
          <p className="mt-4 text-lg text-gray-500">
            {content.paragraph2}
          </p>
        </div>
      </div>
      <HospitalFeatures />
      <Stats />
    </HospitalLayout>
  );
}

export default HospitalPage;
