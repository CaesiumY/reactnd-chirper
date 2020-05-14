import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New Tweet
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
