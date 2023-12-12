import React from "react";
import "./CardSection.css";
import ItemCard from "../ItemCard/ItemCard";

function CardSection(props) {
  return (
    <div className="card-section__container">
      <h2 className="card-section__title">
        Today is 75°F / You may want to wear:
      </h2>
      <section className="card-section">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
    </div>
  );
}

export default CardSection;
