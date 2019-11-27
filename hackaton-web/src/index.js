import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './reset.scss';
import './global.scss';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('main'));
