import React from "react";
import "./ItemModal.css";

function ItemModal(props) {
  return (
    <div className="preview-modal" onClick={props.onClose}>
      <div className="preview-modal__content" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="preview-modal__close-button"
          onClick={props.onClose}
        />
        <img className="preview-modal__image" src={props.card.link} alt={props.card.name} />
        <h2 className="preview-modal__title">{props.card.name}</h2>
        <p className="preview-modal__description">Weather: {props.card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
