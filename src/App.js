import React, { Component } from 'react';
import './styles/index.css';
import Header from './header.js';
import Content from './content.js';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content data={data}/>         
     </div>
    );
  }
}

export default App;
