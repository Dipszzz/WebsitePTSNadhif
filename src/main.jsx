import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Jika menggunakan Tailwind atau CSS lainnya

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
