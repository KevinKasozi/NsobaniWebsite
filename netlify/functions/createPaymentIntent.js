const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { items, shippingAddress } = JSON.parse(event.body);

    if (!items || !shippingAddress || !shippingAddress.name || !shippingAddress.line1) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request, missing items or shipping address details' }),
      };
    }

    const customer = await stripe.customers.create();

    const amount = items.reduce((total, item) => total + item.amount, 0);

    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      shipping: {
        name: shippingAddress.name,
        address: {
          line1: shippingAddress.line1,
          city: shippingAddress.city,
          state: shippingAddress.state,
          postal_code: shippingAddress.postal_code,
          country: shippingAddress.country,
        },
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
      body: JSON.stringify({ error: 'Internal Server Error: ' + error.message }),
    };
  }
};
