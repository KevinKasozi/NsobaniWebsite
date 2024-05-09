import React, { useState } from 'react';
import getStripe from '../../lib/getStripe';

const CheckoutForm = () => {
  const [email, setEmail] = useState('');

  const handleCheckout = async () => {
    const stripe = await getStripe();
    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: import.meta.env.VITE_NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
        customerEmail: email,
      });
      if (error) {
        console.warn(error.message);
      }
    } catch (error) {
      console.error('Error in redirectToCheckout', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl donation-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Support Our Cause</h2>
      <p className="text-gray-600 mb-2 text-center">
        Join us in our mission to provide care and support where it's most needed. Your donations help us continue our work and impact lives positively.
      </p>
      <p className="text-gray-600 mb-6 text-center">
        Every contribution matters, no matter the size. Enter your email to stay informed on how your support is making an impact and to proceed with your secure donation.
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={handleCheckout}
      >
        Donate Now
      </button>
      <p className="text-gray-500 text-xs mt-4 text-center">
        We respect your privacy. Your information is kept secure and will never be shared.
      </p>
    </div>
  );
};

export default CheckoutForm;
