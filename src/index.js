import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Route>
    <App />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
