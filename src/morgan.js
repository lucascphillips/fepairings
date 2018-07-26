import React, { Component } from 'react';
import './styles/index.css';
import Select from 'react-select';

export default class Morgan extends Component {
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
            src={data.morgan[0].portrait}
            alt="Character Portrait"
          />
          <figcaption className="portrait-label">
            {data.morgan[0].name}
          </figcaption>
        </div>
        <div className="col-sm">
          <Select
            value={this.state.selected_father}
            options={data.morgan[0].fathers.map(f => ({
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
