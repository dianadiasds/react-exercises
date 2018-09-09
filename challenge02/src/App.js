import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import Chart from "./Chart/Chart";

class App extends Component {

  state = {
      userInput: ''
  }
  inputHandler = (event) => {
    this.setState({userInput : event.target.value})
  }
  deleteHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText})
  }

  render() {

    const chartList = this.state.userInput.split('').map((ch, index) => {
        return <Chart character={ch} key={index} click={() => this.deleteHandler(index)}/>
    })
    return (
      <div className="App">
        <input type='text' onChange={this.inputHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <ValidationComponent inputLenght={this.state.userInput.length}/>

          {chartList}
      </div>
    );
  }
}

export default App;
