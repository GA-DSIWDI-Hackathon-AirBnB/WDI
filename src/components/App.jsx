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
    this.flaskRoute = 'http://localhost:5000';

    this.state = {
      borough:"Manhattan",
      boroughs: {},
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
    componentDidMount() {
    fetch(`${this.flaskRoute}/menu_data`, {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
    .then(boroughs => {
      console.log(boroughs[0])
      console.log(boroughs[1])
      this.setState({
        boroughs: boroughs[0],
        rooms: boroughs[1]
      })
    })
    .catch(err => console.log(err))
  }

  sendMenuResp(){
    console.log('posting');
    fetch('http://localhost:5000/result', {
      headers: {
        'Content-Type':'application/json'
      },
      method:'POST',
      mode: 'cors',
      body: JSON.stringify({
        borough: "Manhattan",
        neighbourhood: "Upper East Side",
        room_type: "Private room",
        accommodates: 1,
        bedrooms: 1
      })
    })
    .then(() => {
      console.log('sent');
      this.getDataResp()
    })
    .catch(err => console.log(err))
  }

  getDataResp(){
    console.log('geting');
    fetch('http://localhost:5000/result', {
      method:'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err))
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
      <div id="supercontainer">
        <header><h1>APP NAME</h1></header>
        <div id="container">
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
          <button onClick={this.console.bind(this)}>Check States</button>
          <button onClick={() => this.sendMenuResp()}>Send Menu Choices</button>

          <Chart
            type={"bar"}
            width={400}
            height={400}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            showTooltips={true}
            data={this.state.data}
          />

        </div>
        <div id="footer"><h2>COPYRIGHT 2016</h2></div>

      </div>

    );
  }
}
