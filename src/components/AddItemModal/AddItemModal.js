import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
}) {
  return (
    <ModalWithForm
      title={title}
      name={name}
      buttonText={buttonText}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
}
