import React from "react";

function AddGarmentForm() {
  return (
    <>
      <label>
        Name
        <input type="text" name="name" minLength="1" maxLength="30" />
      </label>
      <label>
        Image
        <input type="url" name="link" minLength="10" />
      </label>
      <div>
        <p>Select the Weather Type</p>
        <div>
          <input type="radio" id="hot" value="hot" />
          <label>Hot</label>
        </div>
        <div>
          <input type="radio" id="warm" value="warm" />
          <label>Warm</label>
        </div>
        <div>
          <input type="radio" id="cold" value="cold" />
          <label>Cold</label>
        </div>
      </div>
    </>
  );
}

export default AddGarmentForm;
