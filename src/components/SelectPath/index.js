import React, { useState } from "react";
// import UserLocation from "../UserLocation";
import Difficultylevel from "../DifficultyLevel";
import { Container, Row, Col, Nav } from "react-bootstrap";

function SelectPath(props) {
  const [setPath] = useState("");

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setPath(value);
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <Nav>
              <Difficultylevel
                updateDifficulty={props.updateDifficulty}
                onchange={handleInputChange}
              />
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectPath;
