import "./AddItemModal.css";
import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function AddItemModal({ title, name, buttonText, onClose, onSubmit }) {
  const { values, handleFormFieldChange } = useForm({});

  const handleSubmit = () => {
    onSubmit({
      name: values.name,
      weather: values.weather,
      imageUrl: values.imageUrl,
    });
  };

  return (
    <ModalWithForm
      title={title}
      name={name}
      buttonText={buttonText}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name || ""}
        onChange={handleFormFieldChange}
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <label htmlFor="imageUrl">Image</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        value={values.imageUrl || ""}
        onChange={handleFormFieldChange}
        minLength="10"
        placeholder="Image URL"
      />
      <div>
        <label>Select the Weather Type</label>
        <div className="modal__radio-option">
          <label>
            <input
              type="radio"
              name="weather"
              id="hot"
              value="hot"
              onChange={handleFormFieldChange}
            />
            Hot
          </label>
        </div>
        <div className="modal__radio-option">
          <label>
            <input
              type="radio"
              name="weather"
              id="warm"
              value="warm"
              onChange={handleFormFieldChange}
            />
            Warm
          </label>
        </div>
        <div className="modal__radio-option">
          <label>
            <input
              type="radio"
              name="weather"
              id="cold"
              value="cold"
              onChange={handleFormFieldChange}
            />
            Cold
          </label>
        </div>
      </div>
      <button className="form-modal__submit-button">{buttonText}</button>
    </ModalWithForm>
  );
}

export default AddItemModal;
