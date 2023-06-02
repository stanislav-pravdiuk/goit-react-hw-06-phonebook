// import { useState, useEffect } from "react";
import ContactForm from "./phonebook/contactForm";
import ContactList from "./contacts/ContactsList";
import Filter from "./contacts/Filter";
// import { useSelector, useDispatch } from "react-redux";
// import { setFilter } from "./redux/contacts/contactsSlice";
// import { getContactsFilter, getFilteredContacts } from "./redux/selectors";
// import { filterContacts } from "./redux/filterSlice";
// import { deleteContact } from "./redux/contactsSlice";

function App() {

  // const { contacts } = useSelector(state => state);
  // const { filter } = useSelector(state => state);
  // const filter = useSelector(getFilteredContacts)
  // const dispatch = useDispatch();

  // const visibleContacts = contacts
    // .filter(contact => contact.name.toLowerCase()
    // .includes(filter.toLowerCase()));

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function removeContact(contactId) {
  //   dispatch(deleteContact(contactId));
  // };

  // function addContact (data) {
  //   dispatch(createContact(data));
  // };

  // function handleFilterChange(event) {
  //   dispatch(setFilter(event));
  // };

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
      {/* <ContactForm onSubmit={addContact} /> */}
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter filter={filter} onChange={handleFilterChange} /> */}
      <Filter />

      {/* <ContactList contacts={contacts} onDeleteContact={deleteContact}/> */}
      <ContactList />

    </div>
  );
};

export default App;