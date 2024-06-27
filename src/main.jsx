import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';  // Correct path to CSS file
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Importing CSS correctly

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
