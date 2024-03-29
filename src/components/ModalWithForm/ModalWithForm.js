import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  children,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal name={name} onClose={onClose}>
      <div className="form-modal__container">
        <h2 className="form-modal__title">{title}</h2>
        <form className="form-modal__form" name={name} onSubmit={handleSubmit}>
          {children}
          <button className="form-modal__submit-button">{buttonText}</button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalWithForm;
