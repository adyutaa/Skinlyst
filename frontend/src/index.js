import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
=======
import App from './App';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 6d1783120e3da652515dea75ecfbb16bfa3b9565
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
