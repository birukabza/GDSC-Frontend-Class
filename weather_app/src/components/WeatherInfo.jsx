import React from "react";
import humidity_icon from "../assets/images-icons/humidity.png";
import wind_icon from "../assets/images-icons/wind.png";

const WeatherInfo = ({ humidity, windSpeed }) => {
  return (
    <div className="weather-info">
      <div className="info">
        <img src={humidity_icon} alt="Humidity Icon" />
        <div>
          <p>{humidity}%</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className="info">
        <img src={wind_icon} alt="Wind Icon" />
        <div>
          <p>{windSpeed} km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
