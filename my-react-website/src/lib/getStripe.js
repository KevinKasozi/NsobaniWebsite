import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    const apiKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!apiKey) {
      console.error('Stripe API key is not defined in environment variables');
      return;
    }
    stripePromise = loadStripe(apiKey);
  }
  return stripePromise;
};

export default getStripe;
