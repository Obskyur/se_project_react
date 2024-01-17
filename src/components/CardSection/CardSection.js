import "./CardSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function CardSection({ weather, onCardClick, items }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const getWeatherType = () => {
    return weather.temp?.F > 70
      ? "hot"
      : weather.temp?.F > 56
      ? "moderate"
      : "cold";
  };
  const weatherType = getWeatherType();

  const filteredCards = items.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <div className="card-section__container">
      <h2 className="card-section__title">
        Today is
        {currentTempUnit === "F"
          ? ` ${weather.temp?.F}°F `
          : ` ${weather.temp?.C}°C `}
        / You may want to wear:
      </h2>
      <section className="card-section">
        {filteredCards.map((card) => (
          <ItemCard onCardClick={onCardClick} card={card} key={card._id} />
        ))}
      </section>
    </div>
  );
}

export default CardSection;
