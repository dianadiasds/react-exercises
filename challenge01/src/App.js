import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username: "Manoel",
    }
    nameHandle = (event) => {
        this.setState ({
            username: event.target.value
        })
    }
  render() {
    return (
      <div className="App">
          <UserInput username={this.state.username} output={this.nameHandle}/>

          <UserOutput username={this.state.username}/>

      </div>
    );
  }
}

export default App;
