import "./Modal.css";
import useEscape from "../../hooks/useEscape";

export default function Modal({ name, onClose, children }) {
  useEscape(onClose);

  return (
    <div className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
