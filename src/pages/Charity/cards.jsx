import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const contentfulSpaceId = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

const Cards = () => {
  const [cardsContent, setCardsContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.getEntries({ content_type: 'hospitalPageContent' })
      .then((response) => {
        if (response.items.length > 0) {
          setCardsContent(response.items[0].fields);
          setLoading(false);
        } else {
          console.log('No data returned');
          setError('No data found');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mb-16">
      <div className="bg-red-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {cardsContent?.tag || 'Feature'}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {cardsContent?.highlight || 'Our Impact'}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              {cardsContent?.description || 'Explore how your contributions make a real difference.'}
            </p>
            <Link to="/donate" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
