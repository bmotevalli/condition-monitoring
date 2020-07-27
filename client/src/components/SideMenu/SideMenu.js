import React, { Component } from "react";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import classes from "./SideMenu.module.css";
import { ROUTES } from "../../settings/settings";
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";

class SideMenu extends Component {
  render() {
    return (
      <div className={classes.SideMenu}>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.props.onToggleSideMenu}
          style={{
            width: "40px",
            height: "40px",
            alignSelf: "flex-end",
            marginRight: "10px",
            marginTop: "10px",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div style={{ marginTop: "80px" }}></div>
        <SideMenuItem
          icon={faHome}
          header="Home"
          link="/"
          isExpanded={this.props.isExpanded}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExpanded: state.isSideMenuExpanded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleSideMenu: () => {
      dispatch({ type: actionTypes.TOGGLE_SIDEMENU });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
