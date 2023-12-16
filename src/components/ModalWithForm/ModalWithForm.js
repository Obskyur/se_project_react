import React from "react";
import "./ModalWithForm.css";

function ModalWithForm(props) {
  
  return (
    <div className={`form-modal modal_type_${props.name}`} onClick={props.onClose}>
      <div className="form-modal__content" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="form-modal__close-button"
          onClick={props.onClose}
        />
        <h2 className="form-modal__title">{props.title}</h2>
        <form className="form-modal__form" name={props.name}>
          {props.children}
          <button className="form-modal__submit-button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
