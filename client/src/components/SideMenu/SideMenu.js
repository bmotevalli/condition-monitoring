import React, { Component } from "react";
import { faHome, faMap, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import classes from "./SideMenu.module.css";
import * as actionTypes from "../../store/action";
import * as ST from "../../settings/settings";
import { connect } from "react-redux";

class SideMenu extends Component {
  state = {
    menuItems: [
      {
        header: "Home",
        icon: faHome,
        link: ST.ROUTES.MAINVIEW.HOME.PATH
      },
      {
        header: "Map",
        icon: faMap,
        link: ST.ROUTES.MAINVIEW.MAP.PATH
      }
    ]
  };

  render() {
    const menuItems = this.state.menuItems.map(item => {
      return (
        <SideMenuItem
          key={item.header}
          icon={item.icon}
          header={item.header}
          link={item.link}
          isExpanded={this.props.isExpanded}
        />
      );
    });

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
            marginTop: "10px"
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div style={{ marginTop: "80px" }}></div>
        {menuItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isExpanded: state.isSideMenuExpanded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleSideMenu: () => {
      dispatch({ type: actionTypes.TOGGLE_SIDEMENU });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
