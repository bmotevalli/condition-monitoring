import React from "react";
import classes from "./NavbarItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className="nav-item">
      {/* className={classes.NavigationItem}> */}
      <NavLink
        className="nav-link"
        to={props.link}
        //   activeClassName={classes.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
