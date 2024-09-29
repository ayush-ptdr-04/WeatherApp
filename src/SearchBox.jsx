import TextField from "@mui/material/TextField"; // Material UI ka TextField import kar rahe hain
import Button from "@mui/material/Button"; // Material UI ka Button import kar rahe hain
import "./SearchBox.css"; // Custom CSS import kar rahe hain
import { useState } from "react"; // React ka useState hook import kar rahe hain

// SearchBox component jo updateInfo function ko props ke through accept kar raha hai
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState(""); // city ka state banaya jisme user input store hoga
  let [error, setError] = useState(false); // error ka state banaya agar kuch galat input mile to

  const API_URL = "http://api.openweathermap.org/data/2.5/weather"; // OpenWeather API ka URL
  const API_KEY = "b543cca2aad4fe55990f5d8afbba2513"; // API key jo weather data fetch karne ke liye chahiye

  // Weather data fetch karne wala function
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric` // API call kar rahe hain city ke naam se
      );
      let jsonResponse = await response.json(); // API response ko JSON format me convert kar rahe hain

      // Weather data ko ek object me store kar rahe hain
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result); // Result ko console me print kar rahe hain for debugging
      return result; // Result return kar rahe hain
    } catch (err) {
      throw err; // Agar error aaye to error throw karte hain
    }
  };

  // Jab user input change kare to city ko update karega
  let handleChange = (evt) => {
    setCity(evt.target.value); // City state ko update kar rahe hain
  };

  // Form submit hone par weather info fetch karta hai
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault(); // Form ke default behavior ko rokte hain
      console.log(city); // City ko console me print karte hain
      setCity(""); // Input field ko clear karte hain
      let newInfo = await getWeatherInfo(city); // City ka weather data fetch kar ke newInfo me store karte hain
      updateInfo(newInfo); // Parent component me info update karte hain
    } catch (err) {
      setError(true); // Agar koi error aaye to error state true set karte hain
    }
  };

  return (
    <div className="SearchBox">
      {/* Form component jo user se city ka naam input leta hai */}
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city} // Input value jo city ke state se linked hai
          onChange={handleChange} // Jab input change ho to handleChange function call hoga
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {/* Agar koi error aaye to message display karega */}
        {error && <p style={{ color: "red" }}>No such place exist</p>}
      </form>
    </div>
  );
}
