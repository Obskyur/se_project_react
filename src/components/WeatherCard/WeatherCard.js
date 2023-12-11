import React, { Component } from "react";
import "./WeatherCard.css";
// import image from '../../images/conditions/day-clear.svg';

// const image = '../../images/conditions/day-clear.svg'

const weatherOptions = [
  { url: "../../images/conditions/day-clear.svg", day: true, type: "clear" },
  { url: "../../images/conditions/day-cloudy.svg", day: true, type: "cloudy" },
  { url: "../../images/conditions/day-rain.svg", day: true, type: "rain" },
  { url: "../../images/conditions/day-storm.svg", day: true, type: "storm" },
  { url: "../../images/conditions/day-snow.svg", day: true, type: "snow" },
  { url: "../../images/conditions/day-fog.svg", day: true, type: "fog" },
  { url: "../../images/conditions/night-clear.svg", day: false, type: "clear" },
  { url: "../../images/conditions/night-cloudy.svg", day: false, type: "cloudy" },
  { url: "../../images/conditions/night-rain.svg", day: false, type: "rain" },
  { url: "../../images/conditions/night-storm.svg", day: false, type: "storm" },
  { url: "../../images/conditions/night-snow.svg", day: false, type: "snow" },
  { url: "../../images/conditions/night-fog.svg", day: false, type: "fog" },
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
    console.log(this.imgSource);
    return (
      <section className="weather">
        <div className="weather__temp">75F</div>
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
