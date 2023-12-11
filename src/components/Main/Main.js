import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <WeatherCard />
        <ItemCard />
      </main>
    );
  }
}

export default Main;
