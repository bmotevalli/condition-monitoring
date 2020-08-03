import React, { Component } from "react";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import MachSummary from "../../components/Info/MachSummary/MachSummary";
import * as ST from "../../settings/settings";
// import PlotLineChart from "../../components/Plot/LineChart/PlotLineChart";
import PlotSensorData from "../../components/Plot/LineChart/PlotSensorData/PlotSensorData";

class MapPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="row"
        style={{
          marginLeft: ST.SIDE_MENU.CLOSED,
          padding: "0px",
          "box-sizing": "border-box"
        }}
      >
        <div
          className="card col-4"
          style={{
            marginLeft: ST.SIDE_MENU.CLOSED,
            height: "700px",
            padding: "0px",
            "box-sizing": "border-box"
          }}
        >
          <div
            className="card"
            style={{
              height: "70%",
              "box-sizing": "border-box"
            }}
          >
            <GoogleMap />
          </div>
          <MachSummary />
        </div>

        <div className="col-6">
          <PlotSensorData />
        </div>
      </div>
    );
  }
}

export default MapPage;
