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
          `https://jsonplaceholder.typicode.com/todos/1`
        );
        setData(response);
        // console.log(response);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  //   console.log(data);
  console.log("123");
  return "ahm";
};

export default FetchWeatherData;
