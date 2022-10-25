import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC_AeGvy2_e6Ni5ZgWpjAu7V5JymPzgmiI",
  authDomain: "fire-base-practice-a1743.firebaseapp.com",
  projectId: "fire-base-practice-a1743",
  storageBucket: "fire-base-practice-a1743.appspot.com",
  messagingSenderId: "439091574572",
  appId: "1:439091574572:web:4f52016bcb2ec446ab5e89",
  measurementId: "G-P124WXYP83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
