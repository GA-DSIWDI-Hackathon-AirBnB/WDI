import React, { Component } from 'react';
import * as d3 from "d3";
import Form from "./Form.jsx";
import Chart from "../../node_modules/d3act/lib/components/Chart";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const options = [
      'Manhattan', 'Bronx',
    ];

    const defaultOption = options[0]

    this.state = {
      borough:"Manhattan",
      man: true,
      queen: false,
      brok: false,
      stat: false,
      bronx: false,
      type:"Private room",
      people: 1,
      room: 1,
      data: [
        { xValue: "React", yValue: 2 },
        { xValue: "Relay", yValue: 12 },
        { xValue: "GraphQL", yValue: 5 },
        { xValue: "Radium", yValue: 7 },
        { xValue: "Babel", yValue: 5 },
      ],
    };
  }
  numPeople(e) {
    this.setState({
      people: e.target.value,
    });
  }
  numRooms(e) {
    this.setState({
      room: e.target.value,
    });
  }
  typeRoom(e) {
    this.setState({
      type: e.target.value,
    });
  }
  borough(e) {
    this.setState({
      borough: e.target.value,
    });
    this.whichDist();
  }
  whichDist() {
    if (this.state.borough === "Manhattan") {
      this.setState({
        man: true,
        queen: false,
        brok: false,
        stat: false,
        bronx: false,
      });
    }
    if (this.state.borough === "Bronx") {
      this.setState({
        man: false,
        queen: false,
        brok: false,
        stat: false,
        bronx: true,
      });
    }
    if (this.state.borough === "Brooklyn") {
      this.setState({
        man: false,
        queen: false,
        brok: true,
        stat: false,
        bronx: false,
      });
    }
    if (this.state.borough === "Queens") {
      this.setState({
        man: false,
        queen: true,
        brok: false,
        stat: false,
        bronx: false,
      });
    }
    if (this.state.borough === "Staten Island") {
      this.setState({
        man: false,
        queen: false,
        brok: false,
        stat: true,
        bronx: false,
      });
    }
  }
  console(){
    console.log(this.state.borough)
  }
  render() {
    return (
      <div>,
        <Form
          numPeople={this.numPeople.bind(this)}
          numRooms={this.numRooms.bind(this)}
          typeRoom={this.typeRoom.bind(this)}
          borough={this.borough.bind(this)}
          man={this.state.man}
          queen={this.state.queen}
          brok={this.state.brok}
          stat={this.state.stat}
          bronx={this.state.bronx}
        />
        <h1>Chart</h1>
        <Chart
          type={"bar"}
          width={500}
          height={500}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          showTooltips={true}
          data={this.state.data}
        />
        <button onClick={this.console.bind(this)}>Check States</button>
      </div>
    );
  }
}

