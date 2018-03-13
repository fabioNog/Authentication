import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Route from './Routes/route.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route/>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
