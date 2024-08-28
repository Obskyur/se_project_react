import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import UserPic from "../../images/userpic.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function Header({ onCreateModal, weather, onRegisterClick, onLoginClick, isLoggedIn, }) {
  const currentUser = useContext(CurrentUserContext);
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

      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <button className="header__add-clothes-button" onClick={onCreateModal}>
          + Add Clothes
        </button>
      </ProtectedRoute>
        

      {isLoggedIn === false && (
        <div className="header__auth-buttons">
          <button className="header__signup-button" onClick={onRegisterClick}>
          Sign Up
          </button>
          <button className="header__signin-button" onClick={onLoginClick}>
          Log In
            </button>
        </div>
      )}

      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Link to="/profile" className="header__profile">
          <div className="header__user-name">{currentUser.name}</div>
          <img src={currentUser.avatar} className="header__user-pic" alt="User Image" />
        </Link>
      </ProtectedRoute>
        
    </header>
  );
}

export default Header;
