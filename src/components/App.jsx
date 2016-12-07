import React, { Component } from 'react';
import * as d3 from "d3";
import Chart from "../../node_modules/d3act/lib/components/Chart";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
            { xValue: "React", yValue: 2 },
            { xValue: "Relay", yValue: 12 },
            { xValue: "GraphQL", yValue: 5 },
            { xValue: "Radium", yValue: 7 },
            { xValue: "Babel", yValue: 5 },
        ]
    };
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
        <Chart
          type={"pie"}
          width={300}
          height={300}
          showTooltips={true}
          data={
            {
              "React": 2,
              "Relay": 12,
              "GraphQL": 5,
            }
          }
        />
        <Chart
          type={"bar"}
          width={500}
          height={500}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          showTooltips={true}
          data={this.state.data}
        />
      </div>
    );
  }
}
