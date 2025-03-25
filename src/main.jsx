import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the critical mounting point - verify your HTML has <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);