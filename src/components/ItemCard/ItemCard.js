import "./ItemCard.css";

function ItemCard(props) {
    return (
      <div className="card" onClick={props.onPreviewModal}>
        <h2 className="card__title">{props.card.name}</h2>
        <img src={props.card.link} className="card__image" alt={props.card.name} onClick={props.handleCardClick}/>
      </div>
    );
}

export default ItemCard;
