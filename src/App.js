import SearchFields from './Components/Search Fields/SearchFields';
import FetchWeatherData from "../Fetch Weather Data/FetchWeatherData";
import './App.css';

function App() {
  const data = <FetchWeatherData />;

  return (
    <div className="App">
      <SearchFields />
    </div>
  );
}

export default App;
