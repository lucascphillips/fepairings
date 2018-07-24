import React, { Component } from 'react';
import './styles/index.css';

export default class Morgan extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-auto">
          <img
            className="char-portrait"
            src={this.props.data.morgan[0].portrait}
            alt="Character Portrait"
          />
          <figcaption className="portrait-label">
            {this.props.data.morgan[0].name}
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
