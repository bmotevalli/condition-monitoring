import React, { Component } from "react";
import classes from "./Map.module.css";
import GoogleMapReact from "google-map-react";
import * as ST from "../../settings/settings";
import * as Api from "../../api/fakeApi/fakeMach";
import Marker from "../../components/Marker/Marker";
import fakeMach from "../../api/fakeApi/fakeMach";

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12
  };

  state = {
    markers: []
  };

  componentDidMount() {
    const machines = Api.getAllMachines().map(machine => {
      return {
        lat: machine.coordinate.lat,
        lng: machine.coordinate.lng,
        text: machine.name
      };
    });
    this.setState({ markers: machines });
  }

  render() {
    const allMarkers = this.state.markers.map(marker => {
      return (
        <Marker
          key={marker.lat}
          text={marker.text}
          lat={marker.lat}
          lng={marker.lng}
        />
      );
    });

    return (
      // Important! Always set the container height explicitly
      // Important! Always set distanceToMouse={() => {}} to avoid bug.
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: ST.API_KEYS.GOOGLE_MAP,
            language: "en"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          distanceToMouse={() => {}}
        >
          {allMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
