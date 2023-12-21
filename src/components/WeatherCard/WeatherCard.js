import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

function WeatherCard({weather}) {
  const weatherOption = weatherOptions.find((i) => {
    return i.day === weather.day && i.type === weather.weather;
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
}

export default WeatherCard;
