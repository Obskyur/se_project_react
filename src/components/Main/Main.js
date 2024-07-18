import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

function Main({ weather, onCardClick, onLikeClick, items }) {
  return (
    <main>
      <WeatherCard weather={weather} />
      <CardSection
        items={items}
        onCardClick={onCardClick}
        onLikeClick={onLikeClick}
        weather={weather}
      />
    </main>
  );
}

export default Main;
