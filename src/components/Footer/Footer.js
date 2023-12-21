import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="footer__developer">Developed by Tristan Miller</p>
        <p className="footer__year">2023</p>
      </footer>
    );
  }
}

export default Footer;
