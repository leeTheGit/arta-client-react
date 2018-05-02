import React, { Component } from 'react';
import './App.css';
import Plants from './component/plants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <Plants />
      </div>
    );
  }
}

export default App;