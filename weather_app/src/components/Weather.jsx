import React, { useEffect, useRef, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import SearchBar from "./SearchBar";
import { fetchWeatherData } from "../services/weatherService";
import clear_icon from "../assets/images-icons/clear.png";
import cloud_icon from "../assets/images-icons/cloud.png";
import drizzle_icon from "../assets/images-icons/drizzle.png";
import rain_icon from "../assets/images-icons/rain.png";
import snow_icon from "../assets/images-icons/snow.png";
import "./Weather.css";

const Weather = () => {
  const inputRef = useRef();
  const [weatherInfo, setWeatherInfo] = useState(null);

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
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const data = await fetchWeatherData(city, API_KEY);
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherInfo({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon,
      });
      inputRef.current.value = "";
    } catch (error) {
      alert(error.message);
      setWeatherInfo(null);
    }
  };

  useEffect(() => {
    search("Addis Ababa");
  }, []);

  return (
    <section className="weather">
      <SearchBar search={search} inputRef={inputRef} />
      {weatherInfo && (
        <>
          <WeatherIcon
            icon={weatherInfo.icon}
            temperature={weatherInfo.temperature}
            location={weatherInfo.location}
          />
          <WeatherInfo
            humidity={weatherInfo.humidity}
            windSpeed={weatherInfo.windSpeed}
          />
        </>
      )}
    </section>
  );
};

export default Weather;
