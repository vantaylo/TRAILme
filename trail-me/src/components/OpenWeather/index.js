import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Hour from "./Hour"

function GetWeather() {
  const [weather, setWeather] = useState({

    current: {},
    hourly: []

  }
  );

  // "https://api.openweathermap.org/data/2.5/onecall?"+{prop.lat}"&"+ {prop.long} +"&exclude=daily&appid=" +
  // process.env.REACT_APP_OPENWEATHER_API_KEY

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=daily&appid=6331b558a2d7fa66a892d8e22187e11a"
      )
      .then((response) => {
        console.log(response);
        console.log("openweather response: " + response.data);
        setWeather(response.data);
        console.log("Weather Info: " + weather);

      });
  }, []);
  console.log("outside of the useEffect " + weather.hourly.map(item => item.dt))

  // axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=daily&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY)
  // .then(response => {
  //   console.log(response);
  //   setWeather(response);
  //   console.log("Weather Info: ");
  //   console.log(weather);

  // })

  return (

    <Table responsive borderless variant="dark">
      <thead>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}> <Hour time={item.dt}></Hour></td>
          ))}


        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}> {item.weather.map((item, index) => <img key={index} src={`http://openweathermap.org/img/w/${(item.icon)}.png`} />)}</td>
          ))}
        </tr>

        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}> {`${Math.floor((item.temp - 273.15) * 9 / 5) + 32}°F`}</td>
          ))}
        </tr>
        <tr>
          {Array.from(weather.hourly).map((item, index) => (
            <td key={index}> {item.weather.map(item => item.main)}</td>
          ))}


        </tr>

      </tbody>
    </Table>

  )
}

export default GetWeather;
