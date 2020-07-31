import React, { Component } from "react";
import GoogleMap from "./GoogleMap";
import * as ST from "../../settings/settings";
import { connect } from "react-redux";

class MapPage extends Component {
  state = {};
  render() {
    return (
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
        <div>
          <p>
            {this.props.selectedMach ? this.props.selectedMach.name : "Empty"}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMach: state.mach.selectedMach
  };
};

export default connect(mapStateToProps)(MapPage);
