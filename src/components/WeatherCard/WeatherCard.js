import React, { Component } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
class WeatherCard extends Component {
  render() {
    console.log(this);
    this.weatherOption = weatherOptions.find((i) => {
      return (
        i.day === this.props.weather.day &&
        i.type === this.props.weather.weather
      );
    });
    if (this.weatherOption)
      return (
        <section className="weather">
          <div className="weather__temp">{this.props.weather.temp}°F</div>
          <img
            src={this.weatherOption.url}
            className="weather__img"
            alt="Weather Conditions"
          />
        </section>
      );
  }
}

export default WeatherCard;
