import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal.js";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import Footer from "../Footer/Footer.js";
import getWeather from "../../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTempUnitContext.js";

function App() {
  const [weather, setWeather] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          day:
            data.dt < data.sys.sunrise || data.dt > data.sys.sunset
              ? false
              : true,
          weather: getWeatherCondition(data.weather[0].main),
        });
      })
      .catch(console.error);
  }, []);

  function getWeatherCondition(apiWeatherMain) {
    if (apiWeatherMain === "Drizzle") return "Rain";
    else if (apiWeatherMain === "Mist" || apiWeatherMain === "Smoke")
      return "Fog";
    else return apiWeatherMain;
  }

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleTempUnitToggle = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleTempUnitToggle }}
      >
        <Header onCreateModal={handleCreateModal} weather={weather} />
        <ToggleSwitch
          checked={currentTempUnit === "F"}
          handleClick={handleTempUnitToggle}
        />
        <Main onPreviewModal={handlePreviewModal} weather={weather} />
      </CurrentTemperatureUnitContext.Provider>
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
