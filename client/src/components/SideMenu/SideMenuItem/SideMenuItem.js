import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SideMenuItem.module.css";
import { Link } from "react-router-dom";

class SideMenuItem extends Component {
  render() {
    let dispLabel = this.props.isExpanded ? null : { display: "none" };

    return (
      <Link to={this.props.link} exact={this.props.exact}>
        <div className={classes.SideMenuItem}>
          <FontAwesomeIcon icon={this.props.icon} />
          <p style={dispLabel}>{this.props.header}</p>
        </div>
      </Link>
    );
  }
}

export default SideMenuItem;
