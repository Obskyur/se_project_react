import "./AddItemModal.css";

function AddItemModal({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <label>Image</label>
      <input
        type="url"
        name="link"
        onChange={handleChange}
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
            onChange={handleChange}
          />
          <label>Hot</label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            name="weather"
            id="warm"
            value="warm"
            onChange={handleChange}
          />
          <label>Warm</label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            name="weather"
            id="cold"
            value="cold"
            onChange={handleChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </>
  );
}

export default AddItemModal;
