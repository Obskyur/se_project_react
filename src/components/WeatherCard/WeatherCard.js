import React, { Component } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
class WeatherCard extends Component {
  render() {
    [this.imgSource] = weatherOptions.filter((i) => {
      return (
        i.day === this.props.weather.day &&
        i.type === this.props.weather.weather
      );
    });
    if (this.imgSource)
      return (
        <section className="weather">
          <div className="weather__temp">{this.props.weather.temp}°F</div>
          <img
            src={this.imgSource.url}
            className="weather__img"
            alt="Weather Conditions"
          />
        </section>
      );
  }
}

export default WeatherCard;
