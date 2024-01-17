import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

function Main({ weather, onCardClick, items }) {
  return (
    <main>
      <WeatherCard weather={weather} />
      <CardSection items={items} onCardClick={onCardClick} weather={weather} />
    </main>
  );
}

export default Main;
