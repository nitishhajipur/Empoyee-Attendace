import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.scss'
import { Provider } from 'react-redux';
// import "../node_modules/primereact/resources/themes/saga-blue/theme.css";
import '../node_modules/primereact/resources/themes/lara-light-indigo/theme.css';
import '../node_modules/primereact/resources/primereact.css'
// import "../node_modules/primereact/resources/themes/vela-blue/theme.css";
// import "../node_modules/primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './indexReducer/Store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <ToastContainer/>

    <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
