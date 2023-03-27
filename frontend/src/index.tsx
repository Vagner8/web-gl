import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
