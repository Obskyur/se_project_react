import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import UserPic from "../../images/userpic.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";

function Header({ weather, onCreateModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <Link to="/">
        <img src={Logo} className="header__logo" alt="WTWR Logo" />
      </Link>
      <div className="header__details">
        {currentDate}, {weather.city}
      </div>
      <ToggleSwitch />
      <button className="header__add-clothes-button" onClick={onCreateModal}>
        + Add Clothes
      </button>
      <Link to="/profile" className="header__profile">
        <div className="header__user-name">Terrence Tegegne</div>
        <img src={UserPic} className="header__user-pic" alt="User" />
      </Link>
    </header>
  );
}

export default Header;
