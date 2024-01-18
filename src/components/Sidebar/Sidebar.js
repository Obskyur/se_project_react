import "./Sidebar.css";
import userPic from "../../images/userpic.png";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__user">
        <img src={userPic} className="sidebar__user-pic" alt="User" />
        <div className="sidebar__user-name">Terrence Tegegne</div>
      </div>
    </section>
  );
}

export default Sidebar;
