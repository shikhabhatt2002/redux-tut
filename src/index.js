import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*

    Steps: IMPORTANT

Complete Redux Flow

    1) Make Reudux WRAPPER in in index file
    2) What is Provider
    3) Make Store
    4) Check Data Flow in Console
    5) Call Action on Button Click 

*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
