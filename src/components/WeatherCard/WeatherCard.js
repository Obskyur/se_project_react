import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

function WeatherCard({ weather }) {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === weather.day && item.type === weather.weather;
  });

  if (weatherOption)
    return (
      <section className="weather">
        <div className="weather__temp">{weather.temp}°F</div>
        <img
          src={weatherOption.url}
          className="weather__img"
          alt="Weather Conditions"
        />
      </section>
    );
  else return null;
}

export default WeatherCard;
