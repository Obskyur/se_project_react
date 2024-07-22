import "./Sidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar(onChangeProfileClick, onLogOutClick) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <div className="sidebar__user">
        <img
          src={currentUser.avatarUrl}
          className="sidebar__user-pic"
          alt="User"
        />
        <div className="sidebar__user-name">{currentUser.name}</div>
      </div>
      <button className="sidebar__change-profile-button" onClick={() => onChangeProfileClick()}>
        Change profile data
      </button>
      <button className="sidebar__logout-button" onClick={() => onLogOutClick()}>
        Log out
      </button>
    </section>
  );
}

export default Sidebar;
