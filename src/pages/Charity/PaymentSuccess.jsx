import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const paymentIntent = query.get('payment_intent');
    const paymentIntentClientSecret = query.get('payment_intent_client_secret');
    const redirectStatus = query.get('redirect_status');

    if (paymentIntent && paymentIntentClientSecret && redirectStatus === 'succeeded') {
      setStatus('Payment succeeded!');
    } else {
      setStatus('Payment failed or was canceled.');
    }

    // Redirect to the charity page after 20 seconds
    const timer = setTimeout(() => {
      navigate('/charity');
    }, 20000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">{status}</h1>
      <p>Thank you for your donation. Your transaction ID is: {location.search.split('=')[1].split('&')[0]}</p>
      <p>You will be redirected to the charity page in 20 seconds.</p>
    </div>
  );
};

export default PaymentSuccess;
