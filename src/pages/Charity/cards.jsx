import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const contentfulSpaceId = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

const Cards = ({ theme }) => {
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

  const textColor = theme === 'charity' ? 'text-red-600' : 'text-blue-600';
  const bgColor = theme === 'charity' ? 'bg-red-100' : 'bg-blue-100';

  return (
    <div className="mb-16">
      <div className={bgColor}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className={`inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${textColor}`}>
                {cardsContent?.tag || 'Feature'}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {cardsContent?.highlight || 'Our Impact'}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              {cardsContent?.description || 'Explore how your contributions make a real difference.'}
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm">
              <img
                src="https://via.placeholder.com/600x400"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link to="/" className={`transition-colors duration-200 ${textColor}`} aria-label="Category" title="Success Story">
                    Success Story
                  </Link>
                </p>
                <p className="text-base text-gray-700">
                  Discover the incredible impact of our programs through the stories of those we've helped.
                </p>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm">
              <img
                src="https://via.placeholder.com/600x400"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link to="/" className={`transition-colors duration-200 ${textColor}`} aria-label="Category" title="Current Project">
                    Current Project
                  </Link>
                </p>
                <p className="text-base text-gray-700">
                  Learn about our ongoing projects and how you can support them to make a difference.
                </p>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm">
              <img
                src="https://via.placeholder.com/600x400"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link to="/" className={`transition-colors duration-200 ${textColor}`} aria-label="Category" title="Volunteer">
                    Volunteer
                  </Link>
                </p>
                <p className="text-base text-gray-700">
                  Find out how you can get involved and volunteer to help us achieve our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
