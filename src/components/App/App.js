import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal.js";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import Footer from "../Footer/Footer.js";
import getWeather from "../../utils/weatherApi.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weather, setWeather] = useState({});
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather({
          city: data.name,
          temp: Math.ceil(data.main.temp),
          day:
            data.dt < data.sys.sunrise || data.dt > data.sys.sunset
              ? false
              : true,
          weather: getWeatherCondition(data.weather[0].main),
        });
      })
      .catch(console.error);
  });

  function getWeatherCondition(apiWeatherMain) {
    if (apiWeatherMain === "Drizzle") return "Rain";
    else if (apiWeatherMain === "Mist" || apiWeatherMain === "Smoke")
      return "Fog";
    else return apiWeatherMain;
  }

  const handleCloseModal = () => {
    window.removeEventListener("keydown", handleEsc);
    setActiveModal("");
  };

  const handleCreateModal = () => {
    window.addEventListener("keydown", handleEsc);
    setActiveModal("create");
  };

  const handlePreviewModal = (card) => {
    window.addEventListener("keydown", handleEsc);
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") handleCloseModal();
  };

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} weather={weather} />
      <Main onPreviewModal={handlePreviewModal} weather={weather} />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          name="new-garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
        >
          <AddGarmentForm />
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal
          card={{
            _id: selectedCard._id,
            name: selectedCard.name,
            weather: selectedCard.weather,
            link: selectedCard.link,
          }}
          onClose={handleCloseModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
