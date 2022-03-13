import { useState } from "react";
import "./SearchFields.css";

const SearchFields = (props) => {
  const [city, setCity] = useState(null);
  //   const [country, setCountry] = useState("");
  const { getCity } = props;

  const handleChange = (e) => {
    //   if (e.target.name === "cityInput")
    setCity(e.target.value);
    // else setCountry(e.target.value);
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
      <input
        type="text"
        name="countryInput"
        id="countryInput"
        className="input-field"
        placeholder="Country..."
        // onChange={handleChange}
      />
      <input type="submit" id="getWeatherBut" value="Get Weather" />
    </form>
  );
};

export default SearchFields;
