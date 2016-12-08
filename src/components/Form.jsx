import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <p>Number of people</p>
        <input type="number" name="people" min="1" onChange={this.props.numPeople} />
        <p>Number of rooms</p>
        <input type="number" name="rooms" min="1" onChange={this.props.numRooms} />
        <select onChange={this.props.typeRoom}>
          <option value="Private room">Private Room</option>
          <option value="Shared room">Shared Room</option>
          <option value="Entire home/apt">Entire Home</option>
        </select>
        <select onChange={this.props.borough}>
          <option value="Manhattan">Manhattan</option>
          <option value="Bronx">Bronx</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>
    );
  }
}
