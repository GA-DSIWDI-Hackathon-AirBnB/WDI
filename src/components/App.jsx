import React, { Component } from 'react';
import * as d3 from "d3";
import Chart from "../../node_modules/d3act/lib/components/Chart";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const options = [
      'Manhattan', 'Bronx'
    ];

    const defaultOption = options[0]
    this.flaskRoute = 'http://localhost:5000';

    this.state = {
      data: [
          { xValue: "React", yValue: 2 },
          { xValue: "Relay", yValue: 12 },
          { xValue: "GraphQL", yValue: 5 },
          { xValue: "Radium", yValue: 7 },
          { xValue: "Babel", yValue: 5 },
      ],
      boroughs: {},
      rooms:{}
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


  render() {
    return (
      <div id="supercontainer">
<header><h1>APP NAME</h1></header>

        <div id="container">
        <Chart
          type={"bar"}
          width={500}
          height={500}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          showTooltips={true}
          data={this.state.data}
        />
        </div>
 <footer><h2>COPYRIGHT 2016</h2></footer>
      </div>
    );
  }
}


