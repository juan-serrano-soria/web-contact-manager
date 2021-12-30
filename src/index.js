import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function AddContact() {
  const [name, setName] = useState('');
  const [tlf, setTlf] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleChange() {}

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Name:
        <input type="text" value={name} onChange={handleName} />
      </p>
      <p>
        Phone:
        <input type="text" value={tlf} onChange={handleChange} />
      </p>
      <p>
        Email:
        <input type="email" value={email} onChange={handleChange} />
      </p>
      <p>
        Birthday:
        <input type="date" value={birth} onChange={handleChange} />
      </p>
      <button type="submit">Add contact</button>
    </form>
  );
}

function ShowContactLit(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  
  return <ul>{listItems}</ul>;
}

const contacts = ['Pepe', 'Popo'];

const el = (
  <div>
    <h2>Input Form:</h2>
    <AddContact />
    <h2>Contacts:</h2>
    <ShowContactLit data={contacts} />
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
