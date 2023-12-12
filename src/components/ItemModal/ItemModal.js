import React from "react";
import "./ItemModal.css";

function ItemModal(props) {
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close-button"
          onClick={props.onClose}
        />
        <img className="modal__image" src={props.card.link} />
        <h2 className="modal__title">{props.card.name}</h2>
        <p className="modal__description">Weather: {props.card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
