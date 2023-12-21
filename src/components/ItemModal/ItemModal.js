import { useEffect } from "react";
import "./ItemModal.css";

function ItemModal({ card, onClose }) {
  
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
