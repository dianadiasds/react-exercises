import React, { Component } from 'react';
import Person from './Person/Person';
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
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click={() => this.deletePersons(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameHandler(event, person.id)}/>
                  })}
              </div>
        );
      }


    return (
      <div className="App">
        <h1> Hi i am a React app</h1>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}

      </div>
    );
  }
}

export default App;
