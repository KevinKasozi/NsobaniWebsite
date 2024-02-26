import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);