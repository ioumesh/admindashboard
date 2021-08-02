import React from "react";
import "../SideBar/sidebar.scss";
const Menu = ({ title, Icon1, Option1, Icon2, Option2, Icon3, Option3 }) => {
  return (
    <>
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          {Icon1 && <Icon1 className="sidebarIcon" />}
          {Option1}
        </li>
        <li className="sidebarListItem">
          {Icon2 && <Icon2 className="sidebarIcon" />}
          {Option2}
        </li>
        <li className="sidebarListItem">
          {Icon3 && <Icon3 className="sidebarIcon" />}
          {Option3}
        </li>
      </ul>
    </>
  );
};

export default Menu;
