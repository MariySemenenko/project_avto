import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PersistGate persistor={persistor}>
  {/* <React.StrictMode> */}
     <BrowserRouter basename='/project_avto'>
    <App />
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </PersistGate>
  </Provider>
);
