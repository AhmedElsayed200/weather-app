import SearchFields from "./Components/Search Fields/SearchFields";
import FetchWeatherData from "./Components/Fetch Weather Data/FetchWeatherData";
import ShowWeather from "./Components/Show Weather/ShowWeather";
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);

  const getCity = (cityName) => {
    setCity(cityName);
  };

  const response = (
    <FetchWeatherData city={city} APIKey="813e04829d7f4adce86a0adc2d148434" />
  );

  console.log(<FetchWeatherData />);

  return (
    <div className="App">
      <SearchFields getCity={getCity} />
      <ShowWeather response={response} />
    </div>
  );
}

export default App;
