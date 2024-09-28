import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherinfo] = useState({
    city: "delhi",
    feelsLike: 34.84,
    humidity: 58,
    temp: 32.96,
    tempMax: 32.96,
    tempMin: 32.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by sigma</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
