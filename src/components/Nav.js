import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar style={{ backgroundColor: "#207561" }} dark>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        <img src='data:image/jpeg;base64,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' alt='Awesome Logo' id="logo-nav" />
      </NavbarBrand>

      {localStorage.getItem("token") ? (
        <Nav className="nav-links">
          <NavItem>
            <NavLink tag={Link} to="/myaccount">
              My Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/editaccount">
              Edit Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/myplants">
              My Plants
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              tag={Link}
              to="/addplants"

            >
              Add Plants
            </NavLink>
          </NavItem> */}
          <NavItem onClick={logout}>
            <NavLink tag={Link} to="#">
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className="nav-links">
          <NavItem>
            <NavLink
              tag={Link}
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/signup"
              className={location.pathname === "/signup" ? "active" : ""}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
};

export default Navigation;
