import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.temperature.current,
        condition: response.data.condition.description,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "993a6b7650e8d3940tof6da3ca59d8f7";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(apiUrl).then(displayWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    let form = (
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <button type="submit">Search</button>
      </form>
    );
  
    if (loaded) {
      return (
        <div>
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}℃</li>
            <li>Conditions: {weather.condition}</li>
            <li>Windspeed: {Math.round(weather.wind)}km/h</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>
              <img src={weather.icon} alt="Weather Icon" />
            </li>
          </ul>
        </div>
      );
    } else {
      return form;
    }
  }
  