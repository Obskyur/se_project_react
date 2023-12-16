import { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

class Main extends Component {

  render() {
    return (
      <main>
        <WeatherCard weather={this.props.weather} />
        <CardSection onPreviewModal={this.props.onPreviewModal} weather={this.props.weather} />
      </main>
    );
  }
}

export default Main;
