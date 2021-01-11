import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import UserLocation from "./components/UserLocation";
import SelectPath from "./components/SelectPath";
import RangeInput from "./components/RangeInput";
import OpenWeather from "./components/OpenWeather";
import Result from "./components/DifficultyLevel/Result";
// import GetFitBit from "./components/GetFitBit";

import "./App.css";

require("dotenv").config();

function App() {
  const { isLoading } = useAuth0();

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [range, setRange] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Nav className="nav-auto">
        <Profile />
        <RangeInput updateRange={setRange} />

        <UserLocation
          updateLat={setLat}
          updateLong={setLong}
          onChange={() => null}
        />
        <SelectPath
          className="select-difficulty"
          updateDifficulty={setDifficulty}
        />
      </Nav>
      {lat && long && difficulty && range > 0 && (
        <OpenWeather
          key={lat + long}
          submitLat={lat}
          submitLong={long}
          // submitRange={range}
        />
      )}

      {lat && long && difficulty && range > 0 && (
        <Result
          key={lat + long + range + difficulty}
          submitLat={lat}
          submitLong={long}
          submitRange={range}
        />
      )}

      {/* <GetFitBit /> */}
    </div>
  );
}

export default App;
