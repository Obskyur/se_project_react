import Modal from "../Modal/Modal";
import "./ItemModal.css";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ card, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const [isCurrentUser, setIsCurrentUser] = useState(card.owner === currentUser._id);

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
          className={isCurrentUser
            ? "preview-modal__delete-button"
            : "preview-modal__delete-button_hidden"
          }
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
