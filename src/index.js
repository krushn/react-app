import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
//import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './State';
import router from './router';
//import App from './pages/login/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  
);
//<React.StrictMode></React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
