import "./AddItemModal.css";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function AddItemModal({
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
}) {
  // Keep track of form field values to use during onSubmit()
  const [values, setValues] = useState({});
  const handleFormFieldChange = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = () => {
    console.log(values);
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
        onChange={handleFormFieldChange}
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <label>Image</label>
      <input
        type="url"
        name="link"
        onChange={handleFormFieldChange}
        minLength="10"
        placeholder="Image URL"
      />
      <div>
        <label>Select the Weather Type</label>
        <div className="modal__radio-option">
          <input
            type="radio"
            name="weather"
            id="hot"
            value="hot"
            onChange={handleFormFieldChange}
          />
          <label>Hot</label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            name="weather"
            id="warm"
            value="warm"
            onChange={handleFormFieldChange}
          />
          <label>Warm</label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            name="weather"
            id="cold"
            value="cold"
            onChange={handleFormFieldChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
