const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    const { items } = JSON.parse(event.body);

    const customer = await stripe.customers.create();

    const amount = items.reduce((total, item) => total + item.amount, 0);

    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
