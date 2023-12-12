import React, { Component } from "react";
import "./WeatherCard.css";

const weatherOptions = [
  { url: require("../../images/conditions/day-clear.svg").default, day: true, type: "clear" },
  { url: require("../../images/conditions/day-cloudy.svg").default, day: true, type: "cloudy" },
  { url: require("../../images/conditions/day-rain.svg").default, day: true, type: "rain" },
  { url: require("../../images/conditions/day-storm.svg").default, day: true, type: "storm" },
  { url: require("../../images/conditions/day-snow.svg").default, day: true, type: "snow" },
  { url: require("../../images/conditions/day-fog.svg").default, day: true, type: "fog" },
  { url: require("../../images/conditions/night-clear.svg").default, day: false, type: "clear" },
  { url: require("../../images/conditions/night-cloudy.svg").default, day: false, type: "cloudy" },
  { url: require("../../images/conditions/night-rain.svg").default, day: false, type: "rain" },
  { url: require("../../images/conditions/night-storm.svg").default, day: false, type: "storm" },
  { url: require("../../images/conditions/night-snow.svg").default, day: false, type: "snow" },
  { url: require("../../images/conditions/night-fog.svg").default, day: false, type: "fog" }
];
class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.day = props.day;
    this.type = props.type;
    [this.imgSource] = weatherOptions.filter((i) => {
      return i.day === this.day && i.type === this.type;
    });
  }
  render() {
    return (
      <section className="weather">
        <div className="weather__temp">75°F</div>
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
