import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
    name: '',
    number: '',
  
  };

handleChange = e => {
  console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
};

handleSubmit = e => {
  console.log(e);
  const id = nanoid();
  const name = e.name;
  const number = e.number;
  const contactsLists = [...this.state.contacts];
  contactsLists.push({ name, id, number });

  this.setState({ contacts: contactsLists });
};

getFilteredContacts = () => {
  const filterContactsList = this.state.contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(this.state.filter.toLowerCase());
  });
  return filterContactsList;
  };



render() {
  const { filter } = this.state;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={this.handleSubmit} />
      <h2> Contacts</h2>
      <Filter filter={filter} handleChange={this.handleChange} />
      <ContactList contacts={this.getFilteredContacts()} />
    </div>
  );
}
}
/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */