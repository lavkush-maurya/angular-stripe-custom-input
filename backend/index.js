const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

// Initialize Stripe with your secret key
const stripe = Stripe('sk_test_51Php9jJ4tzySvsYcRYVXgwDDiYTWmtyOI8jq3aj2yNGdIe74u7WZaVP5MYNurjfmbahWFRz88g7YTjELbEeGhzcf003AS7Tcuk'); // Replace with your Stripe secret key

const app = express();

// Middleware
app.use(cors({ origin: 'https://frontend-stripe.vercel.app', credentials: true })); //live
// app.use(cors({ origin: 'http://localhost:4200', credentials: true })); //local
app.use(bodyParser.json());

// Endpoint to create a Payment Intent
app.post('/api/payments/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
