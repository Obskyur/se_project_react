import "./Header.css";
import { Component } from "react";
import Logo from "../../images/logo.svg";
import UserPic from "../../images/userpic.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.currentDate = new Date().toLocaleString("default", {
      month: "long",
      day: "numeric",
    });
  }

  render() {
    return (
      <header>
        <img src={Logo} className="header__logo" alt="WTWR Logo" />
        <div className="header__details">
          {this.currentDate}, {this.props.weather.city}
        </div>
        <button
          className="header__add-clothes-button"
          onClick={this.props.onCreateModal}
        >
          + Add Clothes
        </button>
        <div className="header__user-name">Terrence Tegegne</div>
        <img src={UserPic} className="header__user-pic" alt="User" />
      </header>
    );
  }
}

export default Header;
