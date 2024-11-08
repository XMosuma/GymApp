// src/index.js
import React from 'react';
import App from './App';
import './styles.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
