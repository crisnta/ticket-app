import React from 'react';
import ReactDOM from 'react-dom/client';
import { TicketApp } from './TicketApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode
  <BrowserRouter>
    <TicketApp />
  </BrowserRouter>
  //</React.StrictMode>
);

