import express from 'express';
import stripePackage from 'stripe';

const app = express();
const stripe = stripePackage('sk_test_51Ob3ClGV56c8mWXUstzJP06Qwi4KKA0OhKLus1Ryf8CEVVTZ67FC7li9Wz2npZHmIEHPOTvDiEaIy5f3uVaKsGGd00xISVHSSP');

app.use(express.static('public'));
app.use(express.json());

const calculateTax = async (items, currency) => {
  const taxCalculation = await stripe.tax.calculations.create({
    currency,
    customer_details: {
      address: {
        line1: '920 5th Ave',
        city: 'Seattle',
        state: 'WA',
        postal_code: '98104',
        country: 'US',
      },
      address_source: 'shipping',
    },
    line_items: items.map((item) => buildLineItem(item)),
  });

  return taxCalculation;
};

const buildLineItem = (item) => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

const calculateOrderAmount = (items, taxCalculation) => {
  let orderAmount = 1400;
  orderAmount += taxCalculation.tax_amount_exclusive;
  return orderAmount;
};

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  const customer = await stripe.customers.create();

  const taxCalculation = await calculateTax(items, 'gbp');
  const amount = calculateOrderAmount(items, taxCalculation);

  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: 'off_session',
    amount: amount,
    currency: 'gbp',
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      tax_calculation: taxCalculation.id,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Optional root route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));
