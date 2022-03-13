import { useState } from "react";
import "./SearchFields.css";

const SearchFields = () => {
  const [city, setCity] = useState("");
  //   const [country, setCountry] = useState("");

  const handleChange = (e) => {
    //   if (e.target.name === "cityInput")
    setCity(e.target.value);
    // else setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // getWeatherData(city, country);
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
