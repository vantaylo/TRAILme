import React, { useState } from "react";
import { Table } from "react-bootstrap";
import FitbitTestData from "../../FitbitTestData";

require("dotenv").config();

var config = {
  method: "get",
  url:
    "https://api.fitbit.com/1/user/-/activities/list.json?afterDate=2019-12-31&offset=0&limit=100&sort=asc",
  headers: {
    Authorization: process.env.REACT_APP_FITBIT_AUTHORIZATION_KEY,
  },
};

function GetFitBit() {
  const [fitbit, setFitbit] = useState({
    activities: FitbitTestData.activities,
  });

  // useEffect(() => {
  //   axios(config)
  //     .then(function (response) {
  //       setFitbit(response.data);
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  //   console.log(
  //     "Fitbit Activities" + fitbit.activities.map((item) => item)
  //   );
  // axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=daily&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY)
  // .then(response => {
  //   console.log(response);
  //   setWeather(response);
  //   console.log("Weather Info: ");
  //   console.log(weather);

  // })
  // function checkUndefined(arg) {
  //     let temp = parseInt(arg);
  //     if (temp = isNaN) {
  //         return "Heart Rate N/A"}}

  return (
    <Table responsive borderless variant="dark">
      <thead>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}> {`Activity Name: ` + item.activityName}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}> {`Date: ` + item.originalStartTime}</td>
          ))}
        </tr>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}>
              {" "}
              {`Average Heart Rate: ` + item.averageHeartRate}
            </td>
          ))}
        </tr>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}> {`Calories burned: ` + item.calories}</td>
          ))}
        </tr>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}>
              {" "}
              {`Duration: ` + Math.floor(item.activeDuration / 60000) + ` min`}
            </td>
          ))}
        </tr>
        <tr>
          {Array.from(fitbit.activities).map((item, index) => (
            <td key={index}> {`Steps: ` + item.steps}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default GetFitBit;
