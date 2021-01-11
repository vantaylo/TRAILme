import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

const TrailsCompleted = () => {
  const {isAuthenticated } = useAuth0();

  return isAuthenticated && <Nav.Link>Your Trails</Nav.Link>;
};

export default TrailsCompleted;
