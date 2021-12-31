import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function AddContact(props) {
  const [name, setName] = useState('');
  const [tlf, setTlf] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeTlf(e) {
    setTlf(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeBirthday(e) {
    setBirth(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit([name, tlf, email, birth]);
    setName('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </p>
      <p>
        Phone:
        <input type="text" value={tlf} onChange={handleChangeTlf} />
      </p>
      <p>
        Email:
        <input type="email" value={email} onChange={handleChangeEmail} />
      </p>
      <p>
        Birthday:
        <input type="date" value={birth} onChange={handleChangeBirthday} />
      </p>
      <button type="submit">Add contact</button>
    </form>
  );
}

function ShowContactLit(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => (
    <li key={index}>
      {val[0]}, {val[1]}, {val[2]}, {val[3]}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function WebContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <h1>Web Contact Manager</h1>
      <h2>Input Form:</h2>
      <AddContact handleSubmit={addContact} />
      <h2>Contacts:</h2>
      <ShowContactLit data={contacts} />
    </div>
  );
}

const contacts = [
  ['Pepe', '1234', 'pepe@pipi.com', '2000-01-01'],
  ['Pipi', '1234', 'pepe@pipi.com', '1900-01-31'],
];

ReactDOM.render(
  <WebContactManager data={contacts} />,
  document.getElementById('root')
);
