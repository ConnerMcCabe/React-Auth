import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import './App.css';
import Home from '../Components/Home/Home';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';


firebase.initializeApp({
  apiKey: "AIzaSyAeigZ2u2LjCEquBsT9pbIoSkll2ZK9qug",
  authDomain: "chatbot-c0e34.firebaseapp.com",
  databaseURL: "https://chatbot-c0e34.firebaseio.com",
  projectId: "chatbot-c0e34",
  storageBucket: "chatbot-c0e34.appspot.com",
  messagingSenderId: "593163609157",
  appId: "1:593163609157:web:0cbe02569377b6f71cef2c",
  measurementId: "G-RERKWQXM8V"
})

firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth);

class App extends Component {
  render() {
    
    return (
      <div className='App'>
        
        <Home />
        <Header />
        <Banner />

        {/* Message aside */}

        {/* Footer */}
      {/* SearchPage */}
      </div>
    );
  }
}

export default App;
