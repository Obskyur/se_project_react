import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

function Main({weather, onPreviewModal}) {
  return (
    <main>
      <WeatherCard weather={weather} />
      <CardSection
        onPreviewModal={onPreviewModal}
        weather={weather}
      />
    </main>
  );
}

export default Main;
