import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

function Main({ weather, onCardClick }) {
  return (
    <main>
      <WeatherCard weather={weather} />
      <CardSection onCardClick={onCardClick} weather={weather} />
    </main>
  );
}

export default Main;
