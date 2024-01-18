import "./AddItemModal.css";
import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function AddItemModal({ title, name, buttonText, onClose, onSubmit }) {
  const { values, handleFormFieldChange } = useForm({});

  const handleSubmit = () => {
    onSubmit({
      name: values.name,
      weather: values.weather,
      imageUrl: values.link,
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
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={values.name || ""}
        onChange={handleFormFieldChange}
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <label>Image</label>
      <input
        type="url"
        name="link"
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
    </ModalWithForm>
  );
}

export default AddItemModal;
