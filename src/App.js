import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Name from './components/Name';
import Phone from './components/Phone';
import Address from './components/Adress';
import Company from './components/Company';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Talo',
          photo: 'https://via.placeholder.com/100x100',
          email: 'talo242@gmail.com',
          address: 'Vía 4, 1-00 Zona 4, Guatemala',
          company: 'Waravä',
          phone: '47078626',
          notes: '',
        },
        {
          id: 2,
          name: 'Ricardo',
          photo: 'https://via.placeholder.com/100x100',
          email: 'ricardo@gmail.com',
          address: 'Vía 4, 1-00 Zona 5, Guatemala',
          company: 'Royale Studios',
          phone: '41234567',
          notes: 'Esta es una nota',
        },
      ],
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  } // Constructor


  handleFormSubmit(event) {
    event.preventDefault(); // Prevenir que se recargue la página
    const newName = event.target.name.value; // Obtener la información del input

    // Creamos un objeto nuevo con la nueva info del contacto
    const newContact = { 
      name: newName,
    }

    // Agregar objeto nuevo a la lista de contactos ya existente
    this.setState({
      contacts: this.state.contacts.concat(newContact),
    });

    event.target.name.value = '';
  }

  render() {
    const contactList = this.state.contacts.map(function(element) {
      return (
        <div>
          {element.id}
          <Name contactName={element.name} />
          <Phone phone={element.phone} />
          <Address address={element.address} />
          <Company company={element.company}/>
        </div>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact List</h1>
        </header>
        <div className="contact-card">
          {contactList}
        </div>

        <section className="new-contact-form">
          <h2>Agregar nuevo contacto:</h2>
          <form onSubmit={this.handleFormSubmit}>
            Nombre: <input type="text" name="name"/>
          </form>
        </section>
      </div>
    );
  } // Render
}

export default App;

// Crear componentes y mostrarlos en el div de App.js
// Crear el component de Contact Card

// App -> ConcactCard -> Name, Email, 