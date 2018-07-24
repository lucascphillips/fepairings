import React, { Component } from 'react';
import './styles/index.css';
import Header from './header.js';
import Content from './content.js';
import Morgan from './morgan.js';
import Lucina from './lucina.js';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Morgan className="morgan" data={data} />
          <Lucina className="lucina" data={data} />
        </div>
        <Content className="char-list" data={data} />
      </div>
    );
  }
}

export default App;
