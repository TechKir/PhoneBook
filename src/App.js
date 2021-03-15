/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import './scss/main.scss';
import Form from './components/Form';
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import fakeContacts from './data/fakeData';

export const AuthContext = createContext(null);

function App() {
  const allIdsContacts = [];
  fakeContacts.forEach((contact) => allIdsContacts.push(contact.id));
  const [checkedContacts, setCheckedContacts] = useState([]);
  const [idToDisplay, setIdToDisplay] = useState(allIdsContacts);

  return (
    <AuthContext.Provider value={{
      checkedContacts, setCheckedContacts, idToDisplay, setIdToDisplay
    }}
    >
      <div className="App">
        <Header />
        <Form />
        <ContactsList />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
