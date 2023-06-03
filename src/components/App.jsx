import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';

import defaultContacts from '../data/defaultcontacts.json';
import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name.trim(),
      number: data.number.trim(),
    };

    if (isContactExists(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const isContactExists = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
