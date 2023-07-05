import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './components/Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
  <React.StrictMode>
    <HelmetProvider>
        <App />
        <PayPalScriptProvider deferLoading={true}>
        </PayPalScriptProvider>
    </HelmetProvider>
  </React.StrictMode>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
