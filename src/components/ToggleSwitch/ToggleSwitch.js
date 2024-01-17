import "./ToggleSwitch.css";
import { useContext, useEffect, useState } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTempUnit, handleTempUnitToggle } = useContext(
    CurrentTempUnitContext
  );
  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");

  useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <>
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        id="toggle-switch__checkbox"
        checked={isChecked}
        onChange={handleTempUnitToggle}
      />
      <label
        className="toggle-switch__background"
        htmlFor="toggle-switch__checkbox"
      >
        <span className="toggle-switch__button" />
        <span className="toggle-switch__background-label">F</span>
        <span className="toggle-switch__background-label">C</span>
      </label>
    </>
  );
}

export default ToggleSwitch;
