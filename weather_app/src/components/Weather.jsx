import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_logo from "../assets/images-icons/search.png";
import clear_icon from "../assets/images-icons/clear.png";
import cloud_icon from "../assets/images-icons/cloud.png";
import drizzle_icon from "../assets/images-icons/drizzle.png";
import humidity_icon from "../assets/images-icons/humidity.png";
import rain_icon from "../assets/images-icons/rain.png";
import snow_icon from "../assets/images-icons/snow.png";
import wind_icon from "../assets/images-icons/wind.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherInfo, setWeatherInfo] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city == "") {
      alert("City name should not be Empty. Please Enter city Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok){
        alert(data.message)
        return
      }
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherInfo({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherInfo(false);
    }
  };
  useEffect(() => {
    search("Addis Ababa");
  }, []);
  return (
    <section className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a city"
          autoFocus
        />
        <img
          onClick={() => search(inputRef.current.value)}
          src={search_logo}
          alt="Search icon"
        />
      </div>
      {weatherInfo ? (
        <>
          <img
            src={weatherInfo.icon}
            alt="Current weather icon"
            className="weather-icon"
          />
          <span className="temperature">{weatherInfo.temperature} </span>
          <span className="city-name">{weatherInfo.location}</span>

          <div className="weather-info">
            <div className="info">
              <img src={humidity_icon} alt="Humidity Icon" />
              <div>
                <p>{weatherInfo.humidity}</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="info">
              <img src={wind_icon} alt="wind Icon" />
              <div>
                <p>{weatherInfo.windSpeed}</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Weather;
