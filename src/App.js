import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import { API_KEY, WEATHER_API_URL } from './api';
import { useState, useEffect } from 'react';
import Forecast from './components/forecast/forecast';

function App() {

  useEffect(() => {
    document.title = 'App Weather';
  }, []);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)


    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecastWeather({city: searchData.label, ...forecastResponse });
    }).catch((err) => console.log(err));

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      { currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecastWeather && <Forecast data={forecastWeather} />}

    </div>
  );
}

export default App;