import { useEffect } from "react";
import "./DeleteConfirmationModal.css";

export default function DeleteConfirmationModal({onClose, onConfirm}) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  return (
    <div
      className="delete-modal"
      onClick={onClose}
    >
      <div className="delete-modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="delete-modal__close-button"
          onClick={onClose}
        />
        <form className="delete-modal__form" onSubmit={onConfirm}>
          <h2 className="delete-modal__text">Are you sure you want to delete this item?<br/>This action is irreversible.</h2>
          <button className="delete-modal__confirm-button">
            Yes, delete item
          </button>
          <button className="delete-modal__cancel-button" type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}