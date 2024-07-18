import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection.js";
import Sidebar from "../Sidebar/Sidebar";

function Profile({ onCardClick, onAddItemClick, onLikeClick, items }) {
  return (
    <section className="profile">
      <Sidebar className="profile__sidebar" />
      <ClothesSection
        className="profile__clothes-section"
        items={items}
        onCardClick={onCardClick}
        onLikeClick={onLikeClick}
        onAddItemClick={onAddItemClick}
      />
    </section>
  );
}

export default Profile;
