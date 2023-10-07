import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename='/project_avto'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  
);
