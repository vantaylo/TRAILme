import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

const Analytics = () => {
  const {isAuthenticated } = useAuth0();

  return isAuthenticated && <Nav.Link>Account</Nav.Link>;
};

export default Analytics;
