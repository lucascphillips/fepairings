import React, { Component } from 'react';
import './styles/index.css';
import Select from 'react-select';

export default class Lucina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_mother: null
    };
  }

  render() {
    const { data } = this.props;
    const { lucina } = data.lucina[0];
    const father_img = data.fathers.filter(m => m.name === 'Chrom')[0].portrait;
    const mother_img =
      this.state.selected_mother !== null
        ? data.mothers.filter(
            c => c.name === this.state.selected_mother.value
          )[0].portrait
        : require('./assets/white_screen.png');
    return (
      <div className="row">
        <div className="col-sm-2 child-img">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + data.lucina[0].portrait + ')' }}
          />
          <figcaption className="portrait-label">
            {data.lucina[0].name}
          </figcaption>
        </div>
        <div className="col-sm-2 child-img">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + father_img + ')' }}
          />
          <figcaption className="portrait-label">
            {data.lucina[0].father}
          </figcaption>
        </div>
        <div className="col-sm-2 father">
          <div
            className="char-portrait"
            style={{ backgroundImage: 'url(' + mother_img + ')' }}
          />
          <Select
            className="father-select"
            value={this.state.selected_mother}
            options={data.lucina[0].mothers.map(f => ({
              value: f,
              label: f
            }))}
            onChange={value => this.setState({ selected_mother: value })}
            placeholder="Mother"
            isClearable
          />
        </div>
      </div>
    );
  }
}
