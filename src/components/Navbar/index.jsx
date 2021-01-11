import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import TrailsComplete from "./TrailsComplete";
import Analytics from "./Analytics";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

import "../../App.css";

export default function index() {
  return (
    <Navbar className="style-navbar navbar-dark" expand="xx-lg">
      <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav-toggle" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <TrailsComplete />
          <Analytics />
          <LoginButton />
          <LogoutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
