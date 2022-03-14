import SearchFields from "./Components/Search Fields/SearchFields";
import FetchWeatherData from "./Components/Fetch Weather Data/FetchWeatherData";
import ShowWeather from "./Components/Show Weather/ShowWeather";
import { useState } from "react";
import "./App.css";

const APIKey = "813e04829d7f4adce86a0adc2d148434";

function App() {
  const [city, setCity] = useState("Giza");
  const [weatherData, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getCity = (cityName) => {
    setCity(cityName);
  };

  const getWeatherResponse = (wDatat, loading, err) => {
    setWeather(wDatat);
    setLoading(loading);
    setError(err);
  };

  console.log(weatherData, isLoading, error);

  return (
    <div className="App">
      <SearchFields getCity={getCity} />
      <FetchWeatherData
        city={city}
        APIKey={APIKey}
        getWeatherResponse={getWeatherResponse}
      />
      <ShowWeather
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;
