import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
function WeatherCard(props) {
  const weatherOption = weatherOptions.find((i) => {
    return i.day === props.weather.day && i.type === props.weather.weather;
  });

  if (weatherOption)
    return (
      <section className="weather">
        <div className="weather__temp">{props.weather.temp}°F</div>
        <img
          src={weatherOption.url}
          className="weather__img"
          alt="Weather Conditions"
        />
      </section>
    );
}

export default WeatherCard;
