import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './renderJS/Header';
import Main from './renderJS/Main';

import './style/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Header/>
    <Main/>
  </div>
);