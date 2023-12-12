import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal.js";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import Footer from "../Footer/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: "preview",
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

  handlePreviewModal = () => {
    window.addEventListener("keydown", this.handleEsc);
    this.setState({ activeModal: "preview" });
  }

  handleEsc = (e) => {
    if (e.key === "Escape") this.handleCloseModal();
  };

  render() {
    return (
      <div className="page">
        <Header onCreateModal={this.handleCreateModal} />
        <Main onPreviewModal={this.handlePreviewModal} />
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
        {this.state.activeModal === "preview" && (
          <ItemModal card={{ _id: 1,
            name: "Hoodie",
            weather: "warm",
            link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8" }} onClose={this.handleCloseModal}/>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
