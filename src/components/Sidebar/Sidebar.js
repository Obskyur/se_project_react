import "./Sidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Sidebar() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <div className="sidebar__user">
        <img src={currentUser.avatarUrl} className="sidebar__user-pic" alt="User" />
        <div className="sidebar__user-name">{currentUser.name}</div>
      </div>
    </section>
  );
}

export default Sidebar;
