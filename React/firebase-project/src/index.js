import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD_yC05RKmCf4Mss3YUAq1TdoKALczPpgQ",
  authDomain: "fir-test-project3.firebaseapp.com",
  databaseURL: "https://fir-test-project3.firebaseio.com",
  projectId: "fir-test-project3",
  storageBucket: "fir-test-project3.appspot.com",
  messagingSenderId: "685902379805",
  appId: "1:685902379805:web:f9fbd40a0952af20bffff4"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
