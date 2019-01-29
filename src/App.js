import React, { Component } from 'react';
import Header from "./Components/Header"

class App extends Component {
  state={array: ["Register", "login", "Home"]}
  render() {
    return (<Header lists={this.state.array}/>)
      
  }
}

export default App;
