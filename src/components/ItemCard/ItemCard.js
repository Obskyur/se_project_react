import React, { Component } from "react";
import "./ItemCard.css";

class ItemCard extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.onPreviewModal}>
        <h2 className="card__title">{this.props.card.name}</h2>
        <img src={this.props.card.link} className="card__image" alt={this.props.card.name} onClick={this.handleCardClick}/>
      </div>
    );
  }
}

export default ItemCard;
