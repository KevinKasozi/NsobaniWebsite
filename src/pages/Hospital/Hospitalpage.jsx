import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import HospitalLayout from '../../components/common/HLayout.jsx';
import HeroCarousel from '../../components/carousel.jsx';
import HospitalFeatures from './HospitalFeatures.jsx';
import Stats from './Statistic.jsx';

// Use the correct environment variable for the Contentful Delivery API token
const contentfulSpaceId = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

function HospitalPage() {
  const [content, setContent] = useState(null);

  // Add the useEffect hook here
  useEffect(() => {
    console.log('Attempting to fetch data...');
    client.getEntries({ content_type: 'hospitalPageContent' })
      .then((response) => {
        console.log('Data fetched:', response.items);
        if (response.items.length > 0) {
          setContent(response.items[0].fields);
        } else {
          console.log('No data returned');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);
  

  if (!content) {
    return <div>Loading...</div>; // Or any other loading indicator you prefer
  }

  // The rest of your component's return statement
  return (
    <HospitalLayout>
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
          {/* Dynamically add more paragraphs if they exist */}
        </div>
      </div>
      <HospitalFeatures />
      <Stats />
    </HospitalLayout>
  );
}

export default HospitalPage;
