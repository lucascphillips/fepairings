import React, { Component } from 'react';
import './styles/index.css';
import Select from 'react-select';

export default class Morgan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_parent: null,
      current_gender: 'Female'
    };
  }

  handleChange = () => {
    this.setState({
      current_gender: this.state.current_gender === 'Male' ? 'Female' : 'Male'
    });
  };

  render() {
    const { data } = this.props;
    const morgan = data.morgan.filter(
      m => m.gender === this.state.current_gender
    )[0];
    const robin_img =
      this.state.current_gender === 'Female'
        ? data.fathers.filter(f => f.name === morgan.father)[0].portrait
        : data.mothers.filter(m => m.name === morgan.mother)[0].portrait;
    const parent_img =
      this.state.selected_parent !== null
        ? this.state.current_gender === 'Female'
          ? data.mothers.filter(m => m.name === this.state.selected_parent)[0]
              .portrait
          : data.fathers.filter(f => f.name === this.state.selected_parent)[0]
              .portrait
        : require('./assets/white_screen.png');
    return (
      <div className="row">
        <div className="col-sm-2 child-img">
          <div
            className="char-portrait"
            onClick={this.handleChange}
            style={{ backgroundImage: 'url(' + morgan.portrait + ')' }}
          />
          <figcaption className="portrait-label">{morgan.name}</figcaption>
        </div>
        {this.state.current_gender === 'Female' ? (
          <div className="col-sm-2 child-img">
            <div
              className="char-portrait"
              style={{ backgroundImage: 'url(' + robin_img + ')' }}
            />
            <figcaption className="portrait-label">{morgan.father}</figcaption>
          </div>
        ) : (
          <div className="col-sm-2 father">
            <div
              className="char-portrait"
              style={{ backgroundImage: 'url(' + parent_img + ')' }}
            />
            <Select
              className="father-select"
              value={this.state.selected_parent}
              options={morgan.fathers.map(f => ({
                value: f,
                label: f
              }))}
              onChange={value => this.setState({ selected_parent: value })}
              placeholder="Father"
              isClearable
            />
          </div>
        )}
        {this.state.current_gender === 'Female' ? (
          <div className="col-sm-2 father">
            <div
              className="char-portrait"
              style={{ backgroundImage: 'url(' + parent_img + ')' }}
            />
            <Select
              className="father-select"
              value={this.state.selected_parent}
              options={morgan.mothers.map(f => ({
                value: f,
                label: f
              }))}
              onChange={value => this.setState({ selected_parent: value })}
              placeholder="Mother"
              isClearable
            />
          </div>
        ) : (
          <div className="col-sm-2 child-img">
            <div
              className="char-portrait"
              style={{ backgroundImage: 'url(' + robin_img + ')' }}
            />
            <figcaption className="portrait-label">{morgan.mother}</figcaption>
          </div>
        )}
      </div>
    );
  }
}
