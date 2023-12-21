import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({ title, name, buttonText, onClose, children }) {
  return (
    <div
      className={`form-modal modal_type_${name}`}
      onClick={onClose}
    >
      <div className="form-modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="form-modal__close-button"
          onClick={onClose}
        />
        <h2 className="form-modal__title">{title}</h2>
        <form className="form-modal__form" name={name}>
          {children}
          <button className="form-modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
