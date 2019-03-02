import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import config from '../config/config.json';

ReactDOM.render(
  <BrowserRouter>
    <App config={config} />
  </BrowserRouter>,
  document.getElementById('app'),
);
