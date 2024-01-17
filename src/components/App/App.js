import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";
import getWeather from "../../utils/weatherApi.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import ItemModal from "../ItemModal/ItemModal.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Profile from "../Profile/Profile.js";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

function App() {
  const [weather, setWeather] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather({
          city: data.name,
          temp: {
            F: Math.round(data.main.temp),
            C: Math.round(((data.main.temp - 32) * 5) / 9),
          },
          day:
            data.dt < data.sys.sunrise || data.dt > data.sys.sunset
              ? false
              : true,
          weather: getWeatherCondition(data.weather[0].main),
        });
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => setClothingItems(res))
      .catch(console.error);
  }, []);

  function getWeatherCondition(apiWeatherMain) {
    if (apiWeatherMain === "Drizzle") return "Rain";
    else if (apiWeatherMain === "Mist" || apiWeatherMain === "Smoke")
      return "Fog";
    else return apiWeatherMain;
  }

  const handleAddItemSubmit = (card) => {
    addItem({
      name: card.name,
      weather: card.weather,
      imageUrl: card.imageUrl,
    })
      .then(setClothingItems([card, ...clothingItems]))
      .catch(console.error);
    handleCloseModal();
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard._id)
      .then(
        setClothingItems(
          clothingItems.filter((card) => {
            return card._id !== selectedCard._id;
          })
        )
      )
      .catch(console.error);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const openConfirmationModal = () => {
    setActiveModal("confirm-delete");
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
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleTempUnitToggle }}
      >
        <Header onCreateModal={handleCreateModal} weather={weather} />
        <Route exact path="/">
          <Main
            items={clothingItems}
            onCardClick={handlePreviewModal}
            weather={weather}
          />
        </Route>
        <Route path="/profile/">
          <Profile
            items={clothingItems}
            onCardClick={handlePreviewModal}
            onAddItemClick={handleCreateModal}
          />
        </Route>
      </CurrentTempUnitContext.Provider>
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          name="new-garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
          onSubmit={handleAddItemSubmit}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          card={{
            _id: selectedCard._id,
            name: selectedCard.name,
            weather: selectedCard.weather,
            imageUrl: selectedCard.imageUrl,
          }}
          onClose={handleCloseModal}
          onDelete={openConfirmationModal}
        />
      )}
      {activeModal === "confirm-delete" && (
        <DeleteConfirmationModal
          onClose={handleCloseModal}
          onConfirm={handleCardDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
