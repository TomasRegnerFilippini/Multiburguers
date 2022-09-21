import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

initializeApp ({
  apiKey: "AIzaSyBlITL_i4CCsbgsNk2wAMs7eTx3qtjhO2Y",
  authDomain: "multiburguers.firebaseapp.com",
  projectId: "multiburguers",
  storageBucket: "multiburguers.appspot.com",
  messagingSenderId: "277713548064",
  appId: "1:277713548064:web:75da826e7ca84bf7b55d45",
  measurementId: "G-V5824V3MHB"
});





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);