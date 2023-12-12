import React from "react";
import "./ModalWithForm.css";

function ModalWithForm(props) {
  
  return (
    <div className={`modal modal_type_${props.name}`} onClick={props.onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="close-button"
          onClick={props.onClose}
        />
        <h2 className="modal__title">{props.title}</h2>
        <form name={props.name}>
          {props.children}
          <button className="submit-button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
