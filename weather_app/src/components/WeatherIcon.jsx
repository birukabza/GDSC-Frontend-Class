import React from "react";

const WeatherIcon = ({ icon, temperature, location }) => {
  return (
    <>
      <img src={icon} alt="Current weather icon" className="weather-icon" />
      <span className="temperature">{temperature}℃</span>
      <span className="city-name">{location}</span>
    </>
  );
};

export default WeatherIcon;
