import axios from "axios";
import { useEffect, useState } from "react";

const FetchWeatherData = (props) => {
  const { city, APIKey, getWeatherResponse } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [city, APIKey]);

  console.log(data);
  getWeatherResponse(data, loading, error);

  return null;
};

export default FetchWeatherData;
