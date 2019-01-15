import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      celebName: 'Felicia Day',
      role: 'The Guild'
    };
    console.log(this.state);
  }
  eventHandle = (event) => {
    console.log(event.target.value);
    // Let's change state, which triggers render()
    this.setState({
      // event.target is the input field
      celebName: event.target.value

    });
  }

  eventHandle2 = (event) => {
    console.log(event.target.value);
    // Let's change state, which triggers render()
    this.setState({
      // event.target is the input field
      role: event.target.value,

    });
  }
    btnClick = (event) =>{
    console.log(this.state.celebName + ' is famous for their role in ' + this.state.role );
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Famous People!</h1>
          <br></br>
          <input onChange={this.eventHandle} type="text" placeholder="Name"></input>
          <br></br>
          <input onChange={this.eventHandle2} type="text" placeholder="Role"></input>
          <br>
          </br>
          <button onClick={this.btnClick}>Update!</button>
        </header>

        {/* <p>{this.state.celebName} is famous for their role in {this.state.role}.</p> */}
      </div>
    );
  }
}


export default App;
