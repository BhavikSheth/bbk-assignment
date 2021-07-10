import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherInput, setWeatherInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log("test");

    // fetching some weather data for new weather input
  }, []);

  const handleWeatherSubmit = async (event) => {
    event.preventDefault();

    const API_KEY = "d44cad98190cfa5e0827ddc336f22609";

    console.log("GGetting weather...");

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&appid=${API_KEY}&units=metric`);
    // console.log("🚀 ~ file: Weather.jsx ~ line 20 ~ handleWeatherSubmit ~ response", response);

    const weatherJson = await response.json();
    console.log("🚀 ~ file: Weather.jsx ~ line 23 ~ handleWeatherSubmit ~ weatherJson", weatherJson);

    setWeatherData(weatherJson);
    setWeatherInput("");
  };

  console.log("weatherData: ", weatherData);

  const formattedSunrise = weatherData ? new Date(weatherData.sys.sunrise * 1000) : null;

  const sunriseHours = formattedSunrise ? formattedSunrise.getHours().toString().padStart(2, 0) : null;
  const sunriseMinutes = formattedSunrise ? formattedSunrise.getMinutes().toString().padStart(2, 0) : null;
  const sunriseSeconds = formattedSunrise ? formattedSunrise.getSeconds().toString().padStart(2, 0) : null;

  return (
    <div id="weather-page">
      <h1>Live Weather Information</h1>

      <input type="text" onChange={(e) => setWeatherInput(e.target.value)} value={weatherInput} />

      <form onSubmit={handleWeatherSubmit}>
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <section id="weather-info">
          <h2>{weatherData.name}</h2>

          <p>Today's avergae temperature is: {Math.round(weatherData.main.temp)}&deg;C</p>

          <p>Sunrise: {`${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`}</p>

          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
        </section>
      )}
    </div>
  );
};

export default Weather;
