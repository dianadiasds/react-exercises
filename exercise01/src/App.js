import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons : [
            {name: "Diana", age: "35",},
            {name: "Artur", age: "33",}
        ]
    }
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: "36",},
                {name: "Art", age: "34",}
            ]
        })
    }
    nameHandler = (event) => {
        this.setState({
            persons: [
                {name: "Diana", age: "36",},
                {name: event.target.value, age: "34",}
            ]
        })
    }
  render() {
    return (
      <div className="App">
        <h1> Hi i am a React app</h1>
          <button onClick={this.switchNameHandler.bind(this, 'Nana')}>Switch name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Di')}> My hobbie is draw </Person>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameHandler}
          />
      </div>
    );
  }
}

export default App;
