import "./ItemCard.css";

function ItemCard({card, onPreviewModal}) {
  return (
    <div className="card" onClick={() => onPreviewModal(card)}>
      <h2 className="card__title">{card.name}</h2>
      <img
        src={card.link}
        className="card__image"
        alt={card.name}
      />
    </div>
  );
}

export default ItemCard;
