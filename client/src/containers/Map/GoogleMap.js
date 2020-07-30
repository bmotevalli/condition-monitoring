import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import * as API_KEYS from "../../settings/apikeys";
import * as Api from "../../api/fakeApi/fakeMach";
import classes from "./GoogleMap.module.css";
import locIcon from "../../asset/location.png";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    machines: []
  };

  componentDidMount() {
    const machines = Api.getAllMachines().map(machine => {
      return {
        lat: machine.coordinate.lat,
        lng: machine.coordinate.lng,
        name: machine.name,
        numSensors: machine.sensors.length
      };
    });
    this.setState({ machines: machines });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const allMachMarkers = this.state.machines.map((mach, index) => {
      let key_marker = "marker_" + index.toString();
      return (
        <Marker
          key={key_marker}
          position={{ lat: mach.lat, lng: mach.lng }}
          onClick={this.onMarkerClick}
          name={mach.name}
          icon={locIcon}
          numSensors={mach.numSensors} // Additional Props. Any additional props can be send.
        />
      );
    });

    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >
        {allMachMarkers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>Sensors: {this.state.selectedPlace.numSensors}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: API_KEYS.GOOGLE_MAP
}))(GoogleMap);
