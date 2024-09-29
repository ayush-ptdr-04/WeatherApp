import Card from "@mui/material/Card"; // Material UI ka Card component
import CardContent from "@mui/material/CardContent"; // Material UI ka CardContent component
import CardMedia from "@mui/material/CardMedia"; // Material UI ka CardMedia component for images
import Typography from "@mui/material/Typography"; // Material UI ka Typography component for text
import "./infoBox.css"; // Custom CSS import kar rahe hain
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Icons import for weather representation
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// InfoBox component jo weather info ko props ke through receive karta hai
export default function InfoBox({ info }) {
  // Different URLs jo weather ke hisab se image dikhayenge
  const INIT_URL =
    "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1491380541771-037ccb0f9afd?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          {/* Card image jo humidity ya temperature ke basis par change hoti hai */}
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            {/* City ka naam aur weather icon display kar rahe hain */}
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon /> // Agar humidity zyada ho to thunderstorm icon dikhayenge
              ) : info.temp > 15 ? (
                <WbSunnyIcon /> // Agar temperature zyada ho to sunny icon dikhayenge
              ) : (
                <AcUnitIcon /> // Agar thand ho to cold icon dikhayenge
              )}
            </Typography>
            {/* Weather information ko display karte hain */}
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and Feels
                Like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
