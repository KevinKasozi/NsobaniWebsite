import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing calendar icon from 'react-icons'

const EventsPlaceholder = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-4xl text-center">
      <FaCalendarAlt className="text-red-500 mx-auto text-6xl" />
      <h2 className="text-2xl font-bold text-gray-800 mt-5">Stay Tuned for Upcoming Events!</h2>
      <p className="text-gray-600 mt-3">We are planning some exciting fundraising events that you won't want to miss. From galas to workshops, there's something for everyone!</p>
      <h3 className="text-xl text-gray-800 mt-6 font-semibold">Don't Miss Out!</h3>
      <p className="text-gray-600">Sign up for our newsletter to get the latest updates on our events and find out how you can get involved.</p>
      <form className="mt-6">
        <input type="email" placeholder="Enter your email" className="border-2 border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-gray-500"/>
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-r-md">Subscribe</button>
      </form>
    </div>
  );
};

export default EventsPlaceholder;


