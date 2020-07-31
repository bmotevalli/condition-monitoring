import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import * as API_KEYS from "../../settings/apikeys";
import classes from "./GoogleMap.module.css";
import locIcon from "../../asset/location.png";
import { connect } from "react-redux";
import * as actionMachTypes from "../../store/machines/actionMach";
import MarkerInfo from "../../components/Info/MarkerInfo/MarkerInfo";

const mapStyles = {
  width: "100%",
  height: "100%",
  "box-sizing": "border-box"
};

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.setSelectedMach(props.machId);
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const allMachMarkers = this.props.machines.map((mach, index) => {
      let key_marker = "marker_" + index.toString();
      return (
        <Marker
          key={key_marker}
          position={{ lat: mach.lat, lng: mach.lng }}
          onClick={this.onMarkerClick}
          name={mach.name}
          icon={locIcon}
          numSensors={mach.numSensors} // Additional Props. Any additional props can be send.
          machId={mach.id}
        />
      );
    });

    return (
      <Map
        google={this.props.google}
        zoom={1}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >
        {allMachMarkers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <MarkerInfo selectedPlace={this.state.selectedPlace} />
        </InfoWindow>
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return {
    machines: state.mach.machSummary
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedMach: machId => {
      dispatch({ type: actionMachTypes.GET_MACH_BY_ID, machId: machId });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper(props => ({
    apiKey: API_KEYS.GOOGLE_MAP
  }))(GoogleMap)
);
