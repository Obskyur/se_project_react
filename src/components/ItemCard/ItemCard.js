import React, { Component } from "react";
import "./ItemCard.css";

class ItemCard extends Component {
  constructor(props) {
    super(props);

    this.handleCardClick = props.handleCardClick;
  }
  render() {
    return (
      <div className="card">
        <h2 className="card__title">Placeholder Title</h2>
        <img src="../../images/logo.svg" className="card__image" alt="Placeholder" onClick={this.handleCardClick}/>
      </div>
    );
  }
}

export default ItemCard;
