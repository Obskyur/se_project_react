import Modal from "../Modal/Modal";
import "./ItemModal.css";

function ItemModal({ card, onClose, onDelete }) {
  return (
    <Modal name="preview" onClose={onClose}>
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
    </Modal>
  );
}

export default ItemModal;
