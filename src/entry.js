import React, { Component } from 'react';
import './styles/index.css';
import Select from 'react-select';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_father: ''
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div className="row">
        <div className="col-sm-auto">
          <img
            className="char-portrait"
            src={data.portrait}
            alt="Character Portrait"
          />
          <figcaption className="portrait-label">{data.name}</figcaption>
        </div>
        <div className="col-sm">
          <Select
            value={this.state.selected_father}
            options={data.fathers.map(f => ({
              value: f,
              label: f
            }))}
            onChange={value => this.setState({ selected_father: value })}
            placeholder="Father"
            isClearable
          />
        </div>
        <div className="col-sm" />
      </div>
    );
  }
}
