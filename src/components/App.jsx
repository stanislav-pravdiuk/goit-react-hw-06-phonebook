import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import initialContacts from '../components/contacts/contacts.json';
import ContactForm from "./phonebook/contactForm";
import ContactList from "./contacts/ContactsList";
import Filter from "./contacts/Filter";
import { useSelector, useDispatch } from "react-redux";
import { createContact, removeContact } from "./redux/contacts/contactsSlice";
import { setFilter } from "./redux/contacts/contactsSlice";

function App() {

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()));

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function deleteContact(contactId) {
  //   setContacts(state => state.filter(contact => contactId !== contact.id));
    dispatch(removeContact(contactId));
  };

  function addContact (data) {
    dispatch(createContact(data));
  };

  function handleFilterChange(event) {
  //   setFilter(event.currentTarget.value);
    dispatch(setFilter(event))
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />

      {/* <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} /> */}

    </div>
  );
};

export default App;