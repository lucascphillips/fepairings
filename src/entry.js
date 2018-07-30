import React, { Component } from 'react';
import './styles/index.css';
import Select from 'react-select';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_father: null
    };
  }

  render() {
    const { data, char } = this.props;
    const mother_img = data.mothers.filter(m => m.name === char.mother)[0]
      .portrait;
    const father_img =
      this.state.selected_father !== null
        ? data.fathers.filter(
            c => c.name === this.state.selected_father.value
          )[0].portrait
        : require('./assets/white_screen.png');
    return (
      <div className="row">
        <div className="col-sm-2 child-img">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + char.portrait + ')' }}
          />
          <figcaption className="portrait-label">{char.name}</figcaption>
        </div>
        <div className="col-sm-2 father">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + father_img + ')' }}
          />
          <Select
            className="father-select"
            value={this.state.selected_father}
            options={char.fathers.map(f => ({
              value: f,
              label: f
            }))}
            onChange={value => {
              return this.setState({ selected_father: value });
            }}
            placeholder="Father"
            isClearable
          />
        </div>
        <div className="col-sm-2 child-img">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + mother_img + ')' }}
          />
          <figcaption className="portrait-label">{char.mother}</figcaption>
        </div>
      </div>
    );
  }
}
