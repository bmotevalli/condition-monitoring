import React, { Component } from "react";
import * as ST from "../settings/settings";
import { connect } from "react-redux";
import classes from "./MainView.module.css";

class MainView extends Component {
  render() {
    let Style = {
      marginLeft: ST.SIDE_MENU.CLOSED,
    };
    if (this.props.isExpanded) {
      Style["marginLeft"] = ST.SIDE_MENU.OPENED;
    }

    return (
      <div className="container" style={Style}>
        Main
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExpanded: state.isSideMenuExpanded,
  };
};

export default connect(mapStateToProps)(MainView);
