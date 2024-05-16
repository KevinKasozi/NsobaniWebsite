// src/DonationForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonationForm from '../pages/Charity/Donate';

// Mock the Stripe.js module
jest.mock('@stripe/stripe-js', () => ({
  loadStripe: jest.fn(() => ({
    elements: jest.fn(),
    createPaymentMethod: jest.fn(),
    confirmCardPayment: jest.fn(),
  })),
}));

// Mock the Stripe React module
jest.mock('@stripe/react-stripe-js', () => ({
  Elements: jest.fn(({ children }) => <div>{children}</div>),
  PaymentElement: jest.fn(() => <div data-testid="payment-element"></div>),
  useStripe: jest.fn(() => ({
    confirmPayment: jest.fn(),
    retrievePaymentIntent: jest.fn(),
  })),
  useElements: jest.fn(),
}));

test('renders the DonationForm and processes a fake payment', async () => {
  // Mock the fetch request for the payment intent
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ clientSecret: 'fake-client-secret' }),
    })
  );

  // Render the DonationForm component
  render(<DonationForm />);

  // Check if the payment form is displayed
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByTestId('payment-element')).toBeInTheDocument();

  // Simulate filling out the form
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'test@example.com' },
  });

  // Simulate form submission
  fireEvent.submit(screen.getByRole('button', { name: /pay now/i }));

  // Assert that the confirmPayment method is called
  const stripe = loadStripe();
  await waitFor(() => {
    expect(stripe.confirmPayment).toHaveBeenCalled();
  });

  // Cleanup mocks
  global.fetch.mockRestore();
});
