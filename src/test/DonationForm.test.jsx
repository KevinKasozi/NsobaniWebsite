import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Elements } from '@stripe/react-stripe-js';
import { DonationForm, stripePromise } from '../pages/Charity/Donate';
import 'tailwindcss/tailwind.css';

jest.mock('@stripe/react-stripe-js', () => ({
  useStripe: jest.fn().mockReturnValue({
    confirmPayment: jest.fn(),
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn(),
  }),
  Elements: ({ children }) => <div>{children}</div>,
  PaymentElement: () => <div>PaymentElement</div>,
}));

const renderWithElements = (ui) => {
  return render(<Elements stripe={stripePromise}>{ui}</Elements>);
};

test('renders without crashing', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => {
    const loadingText = screen.queryByText('Loading payment details...');
    expect(loadingText).toBeInTheDocument();
  });
  await waitFor(() => {
    const emailInput = screen.queryByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });
});

test('initializes with the correct default state', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => {
    const emailInput = screen.queryByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });
  const payNowButton = screen.queryByRole('button', { name: /pay now/i });
  expect(payNowButton).toBeDisabled();
});

test('contains email input and pay button', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => {
    const emailInput = screen.queryByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });
  const payNowButton = screen.queryByRole('button', { name: /pay now/i });
  expect(payNowButton).toBeInTheDocument();
});

test("calls Stripe's confirmPayment when submitted with valid data", async () => {
  const mockConfirmPayment = jest.fn().mockResolvedValue({});
  require('@stripe/react-stripe-js').useStripe.mockReturnValue({ confirmPayment: mockConfirmPayment });

  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => screen.getByPlaceholderText('Email'));
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /pay now/i }));
  });
  expect(mockConfirmPayment).toHaveBeenCalled();
});

test('displays loading indicator when processing', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => screen.getByPlaceholderText('Email'));
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /pay now/i }));
  });
  await waitFor(() => {
    const processingText = screen.queryByText('Processing...');
    expect(processingText).toBeInTheDocument();
  });
});

test('displays error if payment fails', async () => {
  const mockConfirmPayment = jest.fn().mockResolvedValue({ error: new Error('Payment failed') });
  require('@stripe/react-stripe-js').useStripe.mockReturnValue({ confirmPayment: mockConfirmPayment });

  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => screen.getByPlaceholderText('Email'));
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /pay now/i }));
  });
  expect(await screen.findByText('Payment failed')).toBeInTheDocument();
});

test('displays a message if Stripe is not loaded', async () => {
  require('@stripe/react-stripe-js').useStripe.mockReturnValue(null);

  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  expect(screen.getByText('Loading payment details...')).toBeInTheDocument();
});

test('displays a message when payment is processing', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  await waitFor(() => screen.getByPlaceholderText('Email'));
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /pay now/i }));
  });
  await waitFor(() => {
    const processingText = screen.queryByText('Processing...');
    expect(processingText).toBeInTheDocument();
  });
});

test('shows loading payment details message initially', async () => {
  await act(async () => {
    renderWithElements(<DonationForm />);
  });
  expect(screen.getByText('Loading payment details...')).toBeInTheDocument();
});
