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
import * as actionSensTypes from "../../../../store/sensors/actionSens";

class PlotSensorData extends Component {
  state = {
    selectedSensors: null
  };

  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.props.selectedMach &&
    //   prevProps.selectedMach &&
    //   this.props.selectedMach.machId !== prevProps.selectedMach.machId
    // ) {
    //   console.log("hi");
    //   const selectedSensors = this.props.selectedMach.sensors.map(
    //     (sensor, index) => {
    //       return { isChecked: false, sensId: sensor.sensId };
    //     }
    //   );
    //   this.setState({
    //     selectedSensors: selectedSensors
    //   });
    // }
  }

  //   updatePlot = (e, index) => {
  //     console.log(this.state.selectedSensors);
  //     if (this.state.selectedSensors) {
  //       let selectedSensors = [...this.state.selectedSensors];
  //       selectedSensors[index].isChecked = !selectedSensors[index].isChecked;

  //       this.setState({
  //         selectedSensors: selectedSensors
  //       });
  //     }
  //   };

  createCombo = () => {
    let options = <p></p>;
    if (this.props.selectedMach) {
      options = this.props.selectedMach.sensors.map((sensor, index) => {
        return (
          <option key={sensor.sensId} value={index}>
            {sensor.name}
          </option>
        );
      });
    }

    return (
      <div className="form-group">
        <label for="sel1">Select Sensor:</label>
        <select
          className="form-control"
          id="sel1"
          onChange={e =>
            this.props.setSelectedSens(
              this.props.selectedMach,
              this.props.selectedMach.sensors[e.target.value].sensId
            )
          }
        >
          {options}
        </select>
      </div>
    );
  };

  plotLines = () => {
    const colors = ["#1E8449", "#E74C3C", "#7D3C98"];
    return Object.keys(this.props.selectedSens.histData[0]).map((k, i) => {
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
  };

  plotChart = lines => {
    return (
      <ResponsiveContainer width="95%" height="95%">
        <LineChart
          width={500}
          height={300}
          data={this.props.selectedSens.histData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Legend />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  render() {
    const combo = this.createCombo();
    let chart = "Select Machine";

    if (this.props.selectedSens) {
      const lines = this.plotLines();
      chart = this.plotChart(lines);
    }
    return (
      <div className="card" style={{ height: "100%", width: "100%" }}>
        <div style={{ width: "50%" }}>{combo}</div>
        <div style={{ height: "100%", width: "100%" }}>{chart}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMach: state.mach.selectedMach,
    selectedSens: state.sens.selectedSens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedSens: (selectedMach, sensId) => {
      dispatch({
        type: actionSensTypes.GET_SENSOR_BY_ID,
        selectedMach: selectedMach,
        sensId: sensId
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotSensorData);
