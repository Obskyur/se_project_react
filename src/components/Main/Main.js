import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

function Main(props) {
  return (
    <main>
      <WeatherCard weather={props.weather} />
      <CardSection
        onPreviewModal={props.onPreviewModal}
        weather={props.weather}
      />
    </main>
  );
}

export default Main;
