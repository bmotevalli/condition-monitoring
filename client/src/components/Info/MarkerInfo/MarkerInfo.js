import React, { Component } from "react";

class MarkerInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>{this.props.selectedPlace.name}</h4>
        <p>Sensors: {this.props.selectedPlace.numSensors}</p>
        <p>Id: {this.props.selectedPlace.machId}</p>
      </div>
    );
  }
}

export default MarkerInfo;
