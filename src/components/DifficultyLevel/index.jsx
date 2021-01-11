import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

class LevelsDropdown extends Component {
  constructor(props) {
    super();
    this.state = { inputvalueue: "Pick A Level" };
  }

  componentDidMount() {
    // this.setState({
    //   inputvalueue: "", // Need to pas a prop
    // });
  }

  handleClick = (e) => {
    this.props.updateDifficulty(e);
    this.setState({
      inputvalueue: e,
    });
  };

  render() {
    return (
      <div className="mb-2 select-difficulty">
        <div id="block2">
          <Dropdown
            className="LevelsDropdown"
            onSelect={(e) => this.handleClick(e)}
            inputvalueue={this.state.inputvalueue}
          >
            <DropdownToggle id="dropdown-basic">
              {this.state.inputvalueue}
            </DropdownToggle>
            <DropdownMenu id="dropdown-levels">
              <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Easy & Intermediate">
                Easy/Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate">
                Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate & Difficult">
                Intermediate/Difficult
              </Dropdown.Item>
              <Dropdown.Item eventKey="Difficult">Difficult</Dropdown.Item>
              <Dropdown.Item eventKey="Very Difficult">
                Very Difficult
              </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default LevelsDropdown;
