import React from "react";
import "./ItemModal.css";

function ItemModal({card, onClose}) {
  return (
    <div className="preview-modal" onClick={onClose}>
      <div className="preview-modal__content" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="preview-modal__close-button"
          onClick={onClose}
        />
        <img className="preview-modal__image" src={card.link} alt={card.name} />
        <h2 className="preview-modal__title">{card.name}</h2>
        <p className="preview-modal__description">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
