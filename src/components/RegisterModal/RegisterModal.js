import "./RegisterModal.css";
import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function RegisterModal({ onClose, onSubmit, onLoginClick }) {
  const { values, handleFormFieldChange, isValid, errors } = useForm({});

  const handleSubmit = () => {
    onSubmit({
      email: values.email,
      password: values.password,
      name: values.name,
      avatarUrl: values.avatarUrl,
    });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      name="RegisterModal"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email || ""}
        onChange={handleFormFieldChange}
        minLength="7"
        placeholder="Email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password || ""}
        onChange={handleFormFieldChange}
        minLength="8"
        placeholder="Password"
        required
      />
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name || ""}
        onChange={handleFormFieldChange}
        minLength="1"
        maxLength="30"
        placeholder="Name"
        required
      />
      <label htmlFor="avatarUrl">Avatar URL</label>
      <input
        type="url"
        id="avatarUrl"
        name="avatarUrl"
        value={values.avatarUrl || ""}
        onChange={handleFormFieldChange}
        minLength="7"
        placeholder="Avatar URL"
        required
      />
      <button
        type="submit"
        className="register-modal__submit-button"
        disabled={!isValid}
      >
        Next
      </button>
      <button
        type="button"
        className="register-modal__login-button"
        onClick={onLoginClick}>
        or Log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
