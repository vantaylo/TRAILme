import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar"
import OpenWeather from "./components/OpenWeather"

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <OpenWeather />
      
    </div>
  );
}

export default App;
