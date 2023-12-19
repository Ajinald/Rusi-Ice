import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './form.css';
import tick from '../assets/tick.png'


// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyAJsyKLkel3KABt99Ysos_UwaeYKIn8HGk",
  authDomain: "rusi-agencies.firebaseapp.com",
  projectId: "rusi-agencies",
  storageBucket: "rusi-agencies.appspot.com",
  messagingSenderId: "69484999595",
  appId: "1:69484999595:web:c9937596927ed7c98598ee",
  measurementId: "G-BKL3LEX1JX"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const popUp = document.getElementById ('pop-up');
const closeBtn = document.getElementById ('close-btn');
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('contacts')
      .add({
        name,
        number,
        email,
        location,
        message,
      })
      .then(() => {
        alert('Message has been submitted');
        setName('');
        setNumber('');
        setEmail('');
        setLocation('');
        setMessage('');
      
      })
      .catch((error) => {
        alert(error.message);
      });

  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Mobile No</label>
        <input
          type="number"
          required
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Location</label>
        <input
          type="text"
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your Message Here"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button className="unlimited-btn" type="submit">
          Submit
        </button>
      </form>
     
    </div>
  );
};

export default Form;
