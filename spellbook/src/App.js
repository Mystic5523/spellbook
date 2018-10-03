import React, { Component } from 'react';
import './App.css';
import MyNavBar from './MyNavBar';
import MyJumbo from './MyJumbo';
import AllSpell from './AllSpell';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <MyJumbo />
        <AllSpell />  
      </div>
    );
  }
}

export default App;
