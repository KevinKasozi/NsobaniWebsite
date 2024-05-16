// DonationForm.test.jsx
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DonationForm from '../pages/Charity/Donate';
import { handler } from '../../netlify/functions/createPaymentIntent';

jest.mock('../../netlify/functions/createPaymentIntent');

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ clientSecret: 'fake-client-secret' }),
    })
  );
});

describe('DonationForm', () => {
  beforeEach(() => {
    handler.mockResolvedValue({ clientSecret: 'fake-client-secret' });
  });

  it('renders without crashing', async () => {
    await act(async () => {
      render(<DonationForm />);
    });
  });

  it('displays email field', async () => {
    await act(async () => {
      render(<DonationForm />);
    });
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('calls payment handler when submitted', async () => {
    await act(async () => {
      render(<DonationForm />);
    });

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText(/pay now/i));

    await waitFor(() => {
      expect(handler).toHaveBeenCalled();
    });
  });

  it('displays error if payment fails', async () => {
    handler.mockRejectedValue(new Error('Payment failed'));

    await act(async () => {
      render(<DonationForm />);
    });

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText(/pay now/i));

    await waitFor(() => {
      expect(screen.getByText(/payment failed/i)).toBeInTheDocument();
    });
  });
});
