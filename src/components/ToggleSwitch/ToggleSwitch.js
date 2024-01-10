import "./ToggleSwitch.css";

function ToggleSwitch({ checked, handleClick }) {
  return (
    <>
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        id="toggle-switch__checkbox"
        checked={checked}
        onChange={handleClick}
      />
      <label
        className="toggle-switch__background"
        htmlFor="toggle-switch__checkbox"
      >
        <span className="toggle-switch__button"/>
        <span className="toggle-switch__background-label">F</span>
        <span className="toggle-switch__background-label">C</span>
      </label>
    </>
  );
}

export default ToggleSwitch;
