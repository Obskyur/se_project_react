import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../CardSection/CardSection";

class Main extends Component {
  constructor(props) {
    super(props);

    this.onPreviewModal = props.onPreviewModal;
  }

  render() {
    return (
      <main>
        <WeatherCard day={true} type="clear" />
        <CardSection onPreviewModal={this.onPreviewModal} />
      </main>
    );
  }
}

export default Main;
