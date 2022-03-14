import { useState } from "react";

const ShowWeather = (props) => {
  const { weatherData, isLoading, error } = props;
  // console.log(isLoading);
  const [responseData, setRespData] = useState({
    latidude: "",
    longitude: "",
    temp: "",
    icon: "",
    country: "",
    city: "",
    windDeg: "",
    windSpeed: "",
  });

  setRespData({
    latidude: weatherData.coord.lat,
    longitude: weatherData.coord.lon,
    temp: weatherData.main.temp,
    icon: weatherData.weather[0].icon,
    country: weatherData.sys.country,
    city: weatherData.name,
    windDeg: weatherData.wind.deg,
    windSpeed: weatherData.wind.speed,
  });

  const displayWeather = (
    <div id="weatherDataContainer">
      <div className="box">
        <div>{responseData.icon}</div>
        <p>{responseData.temp}</p>
      </div>
      <div className="box">
        <div>{responseData.country}</div>
        <p>Country</p>
      </div>
      <div className="box">
        <div>{responseData.city}</div>
        <p>City</p>
      </div>
      <div className="box">
        <div>{responseData.latidude}</div>
        <p>latidude</p>
      </div>
      <div className="box">
        <div>{responseData.longitude}</div>
        <p>longitude</p>
      </div>
      <div className="box">
        <div>{responseData.windDeg}</div>
        <p>Wind Degree</p>
      </div>
      <div className="box">
        <div>{responseData.windSpeed}</div>
        <p>Wind Speed</p>
      </div>
    </div>
  );

  return <>{displayWeather}</>;
};

export default ShowWeather;
