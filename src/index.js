import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function AddContact(props) {
  const [name, setName] = useState('');
  const [tlf, setTlf] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleChange() {}

  function handleSubmit(e) {
    props.handleSubmit(name);
    setName('');
    e.preventDefault();
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


function WebContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <h2>Input Form:</h2>
      <AddContact handleSubmit={addContact}/>
      <h2>Contacts:</h2>
      <ShowContactLit data={contacts} />
    </div>
  );
}

const contacts = ['Pepe', 'Popo'];


ReactDOM.render(
  <WebContactManager data={contacts} />,
  document.getElementById('root')
  );
