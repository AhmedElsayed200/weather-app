import axios from "axios";
import { useEffect, useState } from "react";

const FetchWeatherData = (props) => {
  const { city, APIKey } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
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

  return [data, loading, error];
};

export default FetchWeatherData;
