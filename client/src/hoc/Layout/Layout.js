import React, { Component } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import Navbar from "../../components/Navbar/Nabar";
import MainView from "../../containers/MainView";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <SideMenu />
          <MainView />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
