import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { connect } from "react-redux";
import * as ST from "../../../settings/settings";
import TestData from "./testData.json";
import * as Api from "../../../api/fakeApi/fakeMach";

class PlotLineChart extends Component {
  state = {};

  render() {
    const colors = ["#1E8449", "#E74C3C", "#7D3C98"];
    let chart = "Select Machine";
    if (this.props.dataChart) {
      const lines = Object.keys(this.props.dataChart[0]).map((k, i) => {
        if (k !== "t") {
          return (
            <Line
              type="linear"
              dataKey={k}
              stroke={colors[i]}
              strokeWidth="2"
              dot={false}
              activeDot={{ r: 5 }}
            />
          );
        }
      });

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
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line
              type="linear"
              dataKey="y1"
              stroke="#117A65"
              strokeWidth="2"
              dot={false}
              activeDot={{ r: 10 }}
            /> */}

            {lines}
          </LineChart>
        </ResponsiveContainer>
      );
    }
    return <div style={{ height: "100%", width: "100%" }}>{chart}</div>;
  }
}

const mapStateToProps = (state) => {
  const sensID = state.mach.selectedMach
    ? state.mach.selectedMach.machId.toString() + "_1"
    : null;
  // const testSensor = state.mach.selectedMach
  //   ? state.mach.selectedMach.sensors[0]
  //   : null;

  let dataChart = null;
  let testSensor = null;
  if (sensID) {
    testSensor = Api.getSensorsByID(state.mach.selectedMach, sensID);
    // switch (testSensor.senstype) {
    //   case ST.SENSE_TYPES.PRES:
    //     dataChart = testSensor.histData.map((data, index) => {
    //       console.log(data.timestamp.substring(1, 4));
    //       return {
    //         // x: data.timestamp,
    //         x: index,
    //         y: data.value.P,
    //       };
    //     });
    //     break;
    //   case ST.SENSE_TYPES.TEMP:
    //     dataChart = testSensor.histData.map((data, index) => {
    //       return {
    //         // x: data.timestamp,
    //         x: index,
    //         y: data.value.T,
    //       };
    //     });
    //     break;
    //   case ST.SENSE_TYPES.VIBR:
    //     dataChart = testSensor.histData.map((data, index) => {
    //       return {
    //         // x: data.timestamp,
    //         x: index,
    //         y: data.value.Acc,
    //       };
    //     });
    //     break;
    // }
  }

  return {
    testSensor: testSensor,
    dataChart: testSensor ? testSensor.histData : null,
  };
};

export default connect(mapStateToProps)(PlotLineChart);
