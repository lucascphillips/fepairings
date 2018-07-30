import React, { Component } from 'react';
import './styles/index.css';
import Entry from './entry.js';

export default class Content extends Component {
  render() {
    const data = this.props.data.children;
    const entry = data.map((char, index) => (
      <Entry char={char} data={this.props.data} key={index} />
    ));
    return (
      <div className="Content">
        <div className="container-fluid">{entry}</div>
      </div>
    );
  }
}
