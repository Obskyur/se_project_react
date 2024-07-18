import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import likedButton from "../../images/like__button_liked.svg";
import notLikedButton from "../../images/like__button_unliked.svg";

function ItemCard({ card, onCardClick, onLikeClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card?.likes?.includes(currentUser._id) || false;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLikeClick({ id: card._id, isLiked });
    console.log(card._id, isLiked);
  };

  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <h2 className="card__title">
        {card.name}
        {currentUser && (
          <button className="card__like-button" onClick={handleLikeClick}>
            <img
              src={isLiked ? likedButton : notLikedButton}
              alt={isLiked ? "Liked" : "Not Liked"}
            />
          </button>
        )}
      </h2>
      <img src={card.imageUrl} className="card__image" alt={card.name} />
    </div>
  );
}

export default ItemCard;
