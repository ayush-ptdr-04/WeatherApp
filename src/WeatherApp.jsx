import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  // Weather data ke liye state banaya, jo default mein 'Delhi' ka weather show karega
  const [weatherInfo, setWeatherinfo] = useState({
    city: "delhi", // Default city "Delhi"
    feelsLike: 34.84, // Default feels like temperature
    humidity: 58, // Default humidity
    temp: 32.96, // Default current temperature
    tempMax: 32.96, // Default maximum temperature
    tempMin: 32.05, // Default minimum temperature
    weather: "haze", // Default weather description
  });

  // Ye function weather info ko update karta hai jab user search kare
  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo); // Nayi weather info ko state mein set karta hai
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by sigma</h2>
      {/* SearchBox component ko pass kar rahe hain, jo updateInfo function ko call karega jab user search karega */}
      <SearchBox updateInfo={updateInfo} />
      {/* InfoBox component ko weatherInfo ke data ke saath pass kar rahe hain */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}
