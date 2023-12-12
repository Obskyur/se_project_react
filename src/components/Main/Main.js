import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

class Main extends Component {
  constructor(props) {
    super(props);

    this.onCreateModal = props.onCreateModal;
  }

  render() {
    return (
      <main>
        <WeatherCard day={true} type="clear" />
        <CardSection />
      </main>
    );
  }
}

export default Main;
