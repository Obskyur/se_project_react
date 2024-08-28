import "./EditProfileModal.css";
import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, onSubmit }) => {
  const { values, handleFormFieldChange, isValid, errors } = useForm({});
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    values.name = currentUser?.name;
    values.avatar = currentUser?.avatar;
  }, [currentUser]);

  const handleSubmit = () => {
    onSubmit({
      name: values.name,
      avatar: values.avatar,
    });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" />
      Name*
      <input
        id="name"
        name="name"
        type="text"
        value={values.name || currentUser?.name || ""}
        onChange={handleFormFieldChange}
        required
      />
      <label htmlFor="avatar" />
      Avatar URL
      <input
        id="avatar"
        name="avatar"
        type="text"
        value={values.avatar || currentUser?.avatar || ""}
        onChange={handleFormFieldChange}
        required
      />
      <button
        type="submit"
        className="edit-profile-modal__submit-button"
        disabled={!isValid}
      >
        Save changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
