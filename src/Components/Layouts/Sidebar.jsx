import React from "react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <dic className="container">
        <div className="logo">
          <h1>Logo </h1>
        </div>
        <div>
          <hr className="colored-hr" />
        </div>
        <div className="side-btn">
          <div>
            <NavLink className="nav-link" activeClassName="active" to="/">
              <button>Button One</button>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-link" activeClassName="active" to="/1">
              <button>Button Two</button>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-link" activeClassName="active" to="/2">
              <button>Button Three</button>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-link" activeClassName="active" to="/3">
              <button>Button Four</button>
            </NavLink>
          </div>

        </div>
      </dic>
    </div>
  );
}

export default Sidebar;



