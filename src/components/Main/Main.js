import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

class Main extends Component {
  
  render() {
    return (
      <main>
        <WeatherCard day={true} type="clear" />
        <ItemCard />
      </main>
    );
  }
}

export default Main;
