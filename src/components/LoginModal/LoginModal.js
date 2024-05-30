import "./LoginModal.css";
import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function LoginModal({ onClose, onSubmit, onRegisterClick }) {
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
      title="Log in"
      name="LoginModal"
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
      <button
        type="submit"
        className="login-modal__submit-button"
        disabled={!isValid}
      >
        Next
      </button>
      <button
        type="button"
        className="login-modal__register-button"
        onClick={onRegisterClick}>
        or Register
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
