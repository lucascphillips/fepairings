import React, { Component } from 'react';
import './styles/index.css';

export default class Content extends Component {
  render() {
  	const data = this.props.data.characters;
  	const entry = data.map((char, index) => (
  		<div className="row">
  			<div className="col">{char.name}</div>
		</div>
  		))
    return (
      <div className="Content">
      	{entry}
      </div>
    );
  }
}

