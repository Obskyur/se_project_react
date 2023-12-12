import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import Footer from "../Footer/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: "create",
    };
  }

  handleCloseModal = () => {
    window.removeEventListener("keydown", this.handleEsc);
    this.setState({ activeModal: "" });
  };

  handleCreateModal = () => {
    window.addEventListener("keydown", this.handleEsc);
    this.setState({ activeModal: "create" });
  };

  handleEsc = (e) => {
    if (e.key === "Escape") this.handleCloseModal();
  };

  render() {
    return (
      <div className="page">
        <Header onCreateModal={this.handleCreateModal} />
        <Main />
        {this.state.activeModal === "create" && (
          <ModalWithForm
            title="New Garment"
            name="new-garment"
            buttonText="Add garment"
            onClose={this.handleCloseModal}
          >
            <AddGarmentForm />
          </ModalWithForm>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
