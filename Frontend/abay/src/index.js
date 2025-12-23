import { store } from './Redux/store'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import ReactDOM from'react-dom/client';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

