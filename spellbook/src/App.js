import React, { Component } from 'react';
import './App.css';
import MyNavBar from './component/pages/MyNavBar';
import MyJumbo from './component/pages/MyJumbo';
import AllSpell from './component/pages/AllSpell';
import SpellCard from './component/pages/SpellCard';


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
