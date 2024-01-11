import "./WeatherCard.css";
import { useContext } from 'react';
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function WeatherCard({ weather }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === weather.day && item.type === weather.weather;
  });


  if (weatherOption)
    return (
      <section className="weather">
        <div className="weather__temp">
          {currentTempUnit === "F"
            ? `${weather.temp?.F}°F`
            : `${weather.temp?.C}°C`}
        </div>
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
