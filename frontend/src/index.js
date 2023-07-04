import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
      <App />
    </HelmetProvider>
=======
    <App />
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
