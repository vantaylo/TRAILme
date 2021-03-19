import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import dotenv from "dotenv";

dotenv.config();

class Result extends Component {
  state = {
    trail: [],
    submitRange: this.props.submitRange,
  };

  componentDidMount() {
    axios
      .get(
        `https://www.hikingproject.com/data/get-trails?lat=${this.props.submitLat}&lon=${this.props.submitLong}&maxDistance=${this.props.submitRange}&key=` +
          process.env.REACT_APP_HIKING_PROJECT_API_KEY 
      )
      // .then((response) => console.log(response.data.trails))
      .then((response) => this.setState({ trail: response.data.trails }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submitRange !== this.props.submitRange) {
      this.setState({ submitRange: this.props.submitRange });
    }
  }

  render() {
    return (
      <div>
        <CardColumns className="p-3">
          {this.state.trail.map((e) => {
            return (
              <Card key={e.id}>
                <Card.Img variant="top" src={e.imgSmallMed} />
                <Card.Body>
                  <Card.Title>
                    <a href={e.url} target="_blank" rel="noopener noreferrer">
                      {e.name}
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>{e.summary}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Rating: {e.stars}</small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default Result;
