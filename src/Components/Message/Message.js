import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const firestore = firebase.firestore();

function Message() {
  

  return (
    <div className="Message">
      <ChatRoom />
    </div>
  )
}


function ChatRoom() {
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const sendMessage = '';

  return (<>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </main>
    <form onSubmit={sendMessage}>
      <input ></input>
      <button type="submit"></button>
    </form>
  </>)
}

function ChatMessage() {

}

export default Message