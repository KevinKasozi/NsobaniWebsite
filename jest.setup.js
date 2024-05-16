// jest.setup.js
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocks
fetchMock.enableMocks();

// Configure the fetch mock globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ clientSecret: 'fake-client-secret' }),
  })
);
