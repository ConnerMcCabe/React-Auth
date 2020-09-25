import React, { Component } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import './App.css';
import Home from '../Components/Home/Home';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Message from '../Components/Message/Message';


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


const auth = firebase.auth();
firebase.analytics();


class App extends Component {
  render() {
    const [user] = useAuthState(auth);
    
    return (
      <div className='App'>
        
        <Home />
        <Header />
        <Banner />
        <Message />


        
        <SignOut />
        <SignIn />
      
        {/* Footer */}
      </div>
    );
  }
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign In</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}


export default App;
