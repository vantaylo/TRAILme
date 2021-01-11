import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "../App.css";

const RangeInput = (props) => {
  const [value, setValue] = useState(0);

  return (
    <div className="explore-radius">
      <label className="label-range" htmlFor="customRange1">
        Exploring Radius
      </label>

      <RangeSlider
        variant="warning"
        className="range-input"
        value={value}
        onChange={(changeEvent) => {
          props.updateRange(changeEvent.target.value);
          setValue(changeEvent.target.value);
        }}
      />
    </div>
  );
};

export default RangeInput;
