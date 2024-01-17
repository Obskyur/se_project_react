import "./ItemCard.css";

function ItemCard({ card, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <h2 className="card__title">{card.name}</h2>
      <img src={card.imageUrl} className="card__image" alt={card.name} />
    </div>
  );
}

export default ItemCard;
