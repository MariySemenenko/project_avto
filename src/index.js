import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename='/project_avto'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  
);
