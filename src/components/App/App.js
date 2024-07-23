import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import getWeather from "../../utils/weatherApi.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import ItemModal from "../ItemModal/ItemModal.js";
import Main from "../Main/Main.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import Profile from "../Profile/Profile.js";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.js";
import {
  addCardLike,
  addClothingItem,
  getClothingItems,
  deleteItem,
  getUserInfo,
  removeCardLike,
} from "../../utils/api.js";
import LoginModal from "../LoginModal/LoginModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { signin, signup } from "../../utils/auth.js";

function App() {
  const [weather, setWeather] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Default User",
    avatarUrl:
      "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
  });
  const token = localStorage.getItem("jwt");

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
    getClothingItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (token) {
      getUserInfo(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, [token]);

  function getWeatherCondition(apiWeatherMain) {
    if (apiWeatherMain === "Drizzle") return "Rain";
    else if (apiWeatherMain === "Mist" || apiWeatherMain === "Smoke")
      return "Fog";
    else return apiWeatherMain;
  }

  const handleAddClothingItemSubmit = (card) => {
    setIsLoading(true);
    addClothingItem(
      {
        name: card.name,
        weather: card.weather,
        imageUrl: card.imageUrl,
      },
      token
    )
      .then((card) => {
        setClothingItems([card, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(setIsLoading);
  };

  const handleRegisterSubmit = ({ name, password, email, avatarUrl }) => {
    signup({ name, password, email, avatarUrl })
      .then((user) => {
        setCurrentUser(user);
        handleLoginSubmit(email, password);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoggedIn(true);
      });
  };

  const handleLoginSubmit = ({email, password}) => {
    if (!email || !password) return;
    signin(email, password).then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
      }
      handleCloseModal();
    });
  };

  const handleCardDelete = (e) => {
    e.preventDefault();
    setIsLoading(true);
    deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((card) => {
            return card._id !== selectedCard._id;
          })
        );
        handleCloseModal();
      })
      .catch(console.error)
      .finally(setIsLoading);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    if (!isLiked) {
      addCardLike(id, token)
        .then((newCard) => {
          setClothingItems(
            clothingItems.map((card) => {
              return card._id === newCard._id ? newCard : card;
            })
          );
        })
        .catch(console.error);
    } else {
      removeCardLike(id, token)
        .then((newCard) => {
          setClothingItems(
            clothingItems.map((card) => {
              return card._id === newCard._id ? newCard : card;
            })
          );
        })
        .catch(console.error);
    }
  };

  const handleTempUnitToggle = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const openConfirmationModal = () => {
    setActiveModal("confirm-delete");
  };

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleChangeProfileModal = () => {
    setActiveModal("profileEdit");
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, handleTempUnitToggle }}
        >
          <Header
            onCreateModal={handleCreateModal}
            weather={weather}
            onRegisterClick={handleRegisterClick}
            onLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
          />
          <Route exact path="/">
            <Main
              items={clothingItems}
              onCardClick={handlePreviewModal}
              onLikeClick={handleCardLike}
              weather={weather}
            />
          </Route>
          <Route path="/profile/">
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile
                onChangeProfileClick={handleChangeProfileModal}
                onLogOutClick={handleLogOutClick}
                items={clothingItems}
                onCardClick={handlePreviewModal}
                onLikeClick={handleCardLike}
                onAddItemClick={handleCreateModal}
              />
            </ProtectedRoute>
          </Route>
        </CurrentTempUnitContext.Provider>
        {activeModal === "create" && (
          <AddItemModal
            title="New Garment"
            name="new-garment"
            buttonText={isLoading ? "Saving..." : "Add Garment"}
            onClose={handleCloseModal}
            onSubmit={handleAddClothingItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            card={{
              _id: selectedCard._id,
              owner: selectedCard.owner,
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
            buttonText={isLoading ? "Deleting..." : "Yes, delete item"}
            onClose={handleCloseModal}
            onConfirm={handleCardDelete}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            onSubmit={handleRegisterSubmit}
            onLoginClick={handleLoginClick}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            onSubmit={handleLoginSubmit}
            onRegisterClick={handleRegisterClick}
          />
        )}
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
