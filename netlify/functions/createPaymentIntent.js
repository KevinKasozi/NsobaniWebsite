const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  try {
    const { items } = JSON.parse(event.body);

    // Create a customer
    const customer = await stripe.customers.create();

    // Function to calculate the order amount
    const calculateOrderAmount = (items) => {
      // Replace this with the logic to calculate the total order amount based on items
      // For example:
      return items.reduce((total, item) => total + item.amount, 0);
    };

    const amount = calculateOrderAmount(items);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      amount,
      currency: 'gbp', // Corrected currency code for British pounds
      // Set up automatic confirmation of payment methods
      confirm: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
