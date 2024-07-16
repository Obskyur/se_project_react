import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ items, onCardClick, onaddClothingItemClick }) {
  return (
    <div className="clothes-section__container">
      <h2 className="clothes-section__title">
        Your Items
        <button
          className="clothes-section__add-button"
          onClick={() => onaddClothingItemClick()}
        >
          + Add New
        </button>
      </h2>
      <section className="clothes-section">
        {items.map((card) => (
          <ItemCard onCardClick={onCardClick} card={card} key={card._id} />
        ))}
      </section>
    </div>
  );
}

export default ClothesSection;
