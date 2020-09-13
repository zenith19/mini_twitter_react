import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Nav vertical>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/users">Users List</Link>
          </NavItem>
          <NavItem>
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          {(localStorage.getItem("loginData")===null) && (
            <NavItem>
              <Link to="/login">Log in</Link>
            </NavItem>
          )}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
