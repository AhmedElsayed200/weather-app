import { useState } from "react";
import "./SearchFields.css";

const SearchFields = (props) => {
  const [city, setCity] = useState(null);
  const { getCity } = props;

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityInput"
        id="cityInput"
        className="input-field"
        placeholder="City..."
        onChange={handleChange}
      />
      <input type="submit" id="getWeatherBut" value="Get Weather" />
    </form>
  );
};

export default SearchFields;
