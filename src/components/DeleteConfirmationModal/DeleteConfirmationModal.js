import useEscape from "../../hooks/useEscape.js";
import Modal from "../Modal/Modal.js";
import "./DeleteConfirmationModal.css";

export default function DeleteConfirmationModal({ buttonText, onClose, onConfirm }) {
  useEscape(onClose);

  return (
    <Modal name="delete" onClose={onClose}>
      <button
        type="button"
        className="delete-modal__close-button"
        onClick={onClose}
      />
      <form className="delete-modal__form" onSubmit={onConfirm}>
        <h2 className="delete-modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </h2>
        <button className="delete-modal__confirm-button">
          {buttonText}
        </button>
        <button
          className="delete-modal__cancel-button"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}