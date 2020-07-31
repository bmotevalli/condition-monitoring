import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { connect } from "react-redux";
import * as ST from "../../../settings/settings";
import TestData from "./testData.json";

class PlotLineChart extends Component {
  state = {};

  render() {
    let chart = "Select Machine";
    if (this.props.dataChart) {
      chart = (
        <ResponsiveContainer width="95%" height="95%">
          <LineChart
            width={500}
            height={300}
            data={this.props.dataChart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="linear"
              dataKey="y"
              stroke="#117A65"
              strokeWidth="2"
              dot={false}
              activeDot={{ r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }
    return <div style={{ height: "100%", width: "100%" }}>{chart}</div>;
  }
}

const mapStateToProps = state => {
  const testSensor = state.mach.selectedMach
    ? state.mach.selectedMach.sensors[0]
    : null;

  let dataChart = null;
  if (testSensor) {
    switch (testSensor.senstype) {
      case ST.SENSE_TYPES.PRES:
        dataChart = testSensor.histData.map((data, index) => {
          return {
            // x: data.timestamp,
            x: index,
            y: data.value.P
          };
        });
        break;
      case ST.SENSE_TYPES.TEMP:
        dataChart = testSensor.histData.map((data, index) => {
          return {
            // x: data.timestamp,
            x: index,
            y: data.value.T
          };
        });
        break;
      case ST.SENSE_TYPES.VIBR:
        dataChart = testSensor.histData.map((data, index) => {
          return {
            // x: data.timestamp,
            x: index,
            y: data.value.Acc
          };
        });
        break;
    }
  }

  return {
    testSensor: testSensor,
    dataChart: dataChart
  };
};

export default connect(mapStateToProps)(PlotLineChart);
