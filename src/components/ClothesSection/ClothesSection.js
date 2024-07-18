import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ items, onCardClick, onLikeClick, onAddItemClick }) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <div className="clothes-section__container">
      <h2 className="clothes-section__title">
        Your Items
        <button
          className="clothes-section__add-button"
          onClick={() => onAddItemClick()}
        >
          + Add New
        </button>
      </h2>
      <section className="clothes-section">
        {items.map((card) => (
          <ItemCard onCardClick={onCardClick} onLikeClick={onLikeClick} card={card} key={card._id} />
        ))}
      </section>
    </div>
  );
}

export default ClothesSection;
