import React, { Component } from 'react';
import './styles/index.css';

export default class Lucina extends Component {
  render() {
    console.log(this.props.data.lucina);
    return (
      <div className="row">
        <div className="col-sm-auto">
          <img
            className="char-portrait"
            src={this.props.data.lucina[0].portrait}
            alt="Character Portrait"
          />
          <figcaption className="portrait-label">
            {this.props.data.lucina[0].name}
          </figcaption>
        </div>
        <div className="col-sm">
          <select />
        </div>
        <div className="col-sm" />
      </div>
    );
  }
}
