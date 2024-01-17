import { useEffect } from "react";
import "./ItemModal.css";

function ItemModal({ card, onClose, onDelete }) {
  // Attach / remove handler to close modal on `Esc` press:
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  return (
    <div className="preview-modal" onClick={onClose}>
      <div
        className="preview-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="preview-modal__close-button"
          onClick={onClose}
        />
        <img
          className="preview-modal__image"
          src={card.imageUrl}
          alt={card.name}
        />
        <div className="preview-modal__title-section">
          <h2 className="preview-modal__title">{card.name}</h2>
          <button
            className="preview-modal__delete-button"
            type="button"
            onClick={onDelete}
          >
            Delete Item
          </button>
        </div>
        <p className="preview-modal__weather-type">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
