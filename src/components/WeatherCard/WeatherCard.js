import React, { Component } from "react";
import "./WeatherCard.css";
import image from "../../images/conditions/day-clear.svg";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="weather">
        <div className="weather__temp">75F</div>
        <img src={image} className="weather__img" alt="Weather Conditions"/>
      </section>
    );
  }
}

export default WeatherCard;
