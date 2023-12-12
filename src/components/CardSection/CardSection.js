import React from "react";
import "./CardSection.css";
import ItemCard from "../ItemCard/ItemCard";

function CardSection(props) {
  return (
    <section className="card-section">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </section>
  );
}

export default CardSection;
