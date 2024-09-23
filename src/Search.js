import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setWeather(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity} %</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5acb752426cd8188485c35694980e3a&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    }
  }

  function findCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div>
        <p>Search a city</p>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={findCity} id="city" />
          <input type="submit" id="submit" value="Search" />
        </form>
      </div>
      <div>{weather}</div>
    </div>
  );
}
