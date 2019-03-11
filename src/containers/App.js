import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'dsd', name: 'Max', age: 28 },
      { id: 'jiu', name: 'Manu', age: 30 },
      { id: 'lou', name: 'Stephanie', age: 32 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const person = this.state.persons.find(p => p.id === id);
    person.name = event.target.value;
    const persons = [ ...this.state.persons.map(p => p.id === id ? person : p ) ];
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = ( index ) => {
    console.log('DELETED');
    const persons = this.state.persons.filter(( person, i ) => i !== index);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
        persons={ this.state.persons }
        clicked={ this.deletePersonHandler }
        changed={ this.nameChangedHandler } />
    }

    return (
      <div className={ classes.App }>
        <Cockpit 
          appTitle={ this.props.title }
          howPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler } />
        { persons }
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!'))
  }
}

export default App;
