require('dotenv').config(); // Add this line at the top
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  console.log('Function invoked');
  console.log('Environment Stripe Secret Key:', process.env.STRIPE_SECRET_KEY); // Log the secret key for debugging

  try {
    const { items } = JSON.parse(event.body);
    console.log('Received items:', items); // Log the received items

    if (!items || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No items provided' }),
      };
    }

    // Create a customer
    const customer = await stripe.customers.create();
    console.log('Customer created:', customer.id); // Log the customer ID

    // Function to calculate the order amount
    const calculateOrderAmount = (items) => {
      return items.reduce((total, item) => total + item.amount, 0);
    };

    const amount = calculateOrderAmount(items);
    console.log('Calculated amount:', amount); // Log the calculated amount

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      amount,
      currency: 'gbp',
    });

    console.log('PaymentIntent created:', paymentIntent.id); // Log the PaymentIntent ID

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.error('Error creating PaymentIntent:', error); // Log the error
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
