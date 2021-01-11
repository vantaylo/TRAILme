import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Hour from "./Hour";
import "./style.css"
import dotenv from "dotenv";

dotenv.config();

function GetWeather(props) {
  const [weather, setWeather] = useState({
    current: {},
    hourly: [],
  });

  useEffect(() => {
    if (props.submitLat) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${props.submitLat}&lon=${props.submitLong}&exclude=daily&appid=`+process.env.REACT_APP_OPENWEATHER_API_KEY
        )
        .then((response) => {
          console.log(response);
          console.log("openweather response: " + response.data);
          setWeather(response.data);
          console.log("Weather Info: " + weather);
        });
    }
  }, []);
  // console.log(
  //   "outside of the useEffect " + weather.hourly.map((item) => item.dt)
  // );

  // axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=daily&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY)
  // .then(response => {
  //   console.log(response);
  //   setWeather(response);
  //   console.log("Weather Info: ");
  //   console.log(weather);

  // })

  return (
    <Table responsive>
      <thead>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}>
              {" "}
              <Hour time={item.dt}></Hour>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}>
              {" "}
              {item.weather.map((item, index) => (
                <img className="resize"
                  key={index}
                  src={`http://openweathermap.org/img/w/${item.icon}.png`}
                />
              ))}
            </td>
          ))}
        </tr>

        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}>
              {" "}
              {`${Math.floor(((item.temp - 273.15) * 9) / 5) + 32}°F`}
            </td>
          ))}
        </tr>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}> {item.weather.map((item) => item.main)}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default GetWeather;
