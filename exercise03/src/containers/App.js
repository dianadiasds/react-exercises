import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
    state = {
        persons : [
            {id: "001", name: "Diana", age: "35",},
            {id: "002", name: "Artur", age: "33",}
        ],
        showPersons : false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }

    deletePersons = (personIndex) => {
        //const persons = this.state.persons.slice()
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    nameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = {
            ...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

  render() {

      let persons = null

      if (this.state.showPersons) {
          persons = (
              <div>
                  <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersons}
                  changed={this.nameHandler}/>
              </div>
        );
      }


    return (
      <div className="App">
          <Cockpit clicked={this.togglePersonsHandler}/>
          {persons}

      </div>
    );
  }
}

export default App;
