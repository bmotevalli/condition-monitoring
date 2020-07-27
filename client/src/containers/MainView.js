import React, { Component } from "react";
import * as ST from "../settings/settings";
import { connect } from "react-redux";
import classes from "./MainView.module.css";
import { Switch, Route } from "react-router-dom";

class MainView extends Component {
  render() {
    let Style = {
      marginLeft: ST.SIDE_MENU.CLOSED
    };
    if (this.props.isExpanded) {
      Style["marginLeft"] = ST.SIDE_MENU.OPENED;
    }

    const MainRoutes = Object.keys(ST.ROUTES.MAINVIEW).map(routeName => {
      return (
        <Route
          key={routeName}
          path={ST.ROUTES.MAINVIEW[routeName].PATH}
          component={ST.ROUTES.MAINVIEW[routeName].COMP}
          exact
        />
      );
    });

    return (
      <div className="container-fluid px-0" style={Style}>
        <Switch>{MainRoutes}</Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isExpanded: state.isSideMenuExpanded
  };
};

export default connect(mapStateToProps)(MainView);
