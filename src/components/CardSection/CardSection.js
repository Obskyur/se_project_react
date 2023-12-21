import "./CardSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function CardSection(props) {
  const getWeatherType = () => {
    return props.weather.temp > 84
      ? "hot"
      : props.weather.temp > 56
      ? "moderate"
      : props.weather.temp > 32
      ? "cold"
      : "very cold";
  };
  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <div className="card-section__container">
      <h2 className="card-section__title">
        Today is {props.weather.temp}°F / You may want to wear:
      </h2>
      <section className="card-section">
        {filteredCards.map((card) => (
          <ItemCard
            onPreviewModal={props.onPreviewModal}
            card={card}
            key={card._id}
          />
        ))}
      </section>
    </div>
  );
}

export default CardSection;
