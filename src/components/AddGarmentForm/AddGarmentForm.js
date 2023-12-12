import React from "react";
import "./AddGarmentForm.css";

function AddGarmentForm() {
  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <label>Image</label>
      <input type="url" name="link" minLength="10" placeholder="Image URL" />
      <div>
        <label>Select the Weather Type</label>
        <div className="modal__radio-option">
          <input type="radio" id="hot" value="hot" />
          <label>Hot</label>
        </div>
        <div className="modal__radio-option">
          <input type="radio" id="warm" value="warm" />
          <label>Warm</label>
        </div>
        <div className="modal__radio-option">
          <input type="radio" id="cold" value="cold" />
          <label>Cold</label>
        </div>
      </div>
    </>
  );
}

export default AddGarmentForm;
