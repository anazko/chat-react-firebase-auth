import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import App from './App'
import reportWebVitals from './reportWebVitals'

firebase.initializeApp({
  apiKey: "AIzaSyDXEuzrpo9VuI901o6TBouVXGQrURRaS6s",
  authDomain: "react-chat-d08cd.firebaseapp.com",
  projectId: "react-chat-d08cd",
  storageBucket: "react-chat-d08cd.appspot.com",
  messagingSenderId: "789912194034",
  appId: "1:789912194034:web:ee1787795fe84ae1a9f96b"
});

export const Context = createContext(null)
const auth = firebase.auth()

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
