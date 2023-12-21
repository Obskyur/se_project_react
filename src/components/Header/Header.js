import "./Header.css";
import { useState } from "react";
import Logo from "../../images/logo.svg";
import UserPic from "../../images/userpic.png";

function Header({weather, onCreateModal}) {
  const [currentDate] = useState(
    new Date().toLocaleString("default", {
      month: "long",
      day: "numeric",
    })
  );

  return (
    <header>
      <img src={Logo} className="header__logo" alt="WTWR Logo" />
      <div className="header__details">
        {currentDate}, {weather.city}
      </div>
      <button
        className="header__add-clothes-button"
        onClick={onCreateModal}
      >
        + Add Clothes
      </button>
      <div className="header__user-name">Terrence Tegegne</div>
      <img src={UserPic} className="header__user-pic" alt="User" />
    </header>
  );
}

export default Header;
