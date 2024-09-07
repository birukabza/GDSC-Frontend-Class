import React from 'react'
import './Weather.css'
import search_logo from "../assets/images-icons/search.png"
import clear_icon from "../assets/images-icons/clear.png"
import cloud_icon from "../assets/images-icons/cloud.png"
import drizzle_icon from "../assets/images-icons/drizzle.png"
import humidity_icon from "../assets/images-icons/humidity.png"
import rain_icon from "../assets/images-icons/rain.png"
import snow_icon from "../assets/images-icons/snow.png"
import wind_icon from "../assets/images-icons/wind.png"


const Weather = () => {
  return (
    <section className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Enter a city' autoFocus/>
        <img src={search_logo} alt="Search icon" />
      </div>
      <img src={clear_icon} alt="Current weather icon" className='weather-icon'/>
      <span className='temperature'>16℃ </span>
      <span className='city-name'>London</span>

      <div className="weather-info">
        <div className="info">
          <img src={humidity_icon} alt="Humidity Icon" />
          <div>
            <p>50 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="info">
          <img src={wind_icon} alt="wind Icon" />
          <div>
            <p>5 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Weather

