import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import './styles/index.css';
import './styles/App.css';
import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

