import React from "react";
import "../SideBar/sidebar.scss";
import { Link } from "react-router-dom";
const Menu = ({
  title,
  Icon1,
  Option1,
  Icon2,
  Option2,
  Icon3,
  Option3,
  route,
  route1,
  route2,
  route3,
}) => {
  return (
    <>
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          {Icon1 && <Icon1 className="sidebarIcon" />}
           <Link to={route1}>{Option1}</Link>
        </li>
        <li className="sidebarListItem">
          {Icon2 && <Icon2 className="sidebarIcon" />}
          <Link to={route2}>{Option2}</Link>
        </li>
        <li className="sidebarListItem">
          {Icon3 && <Icon3 className="sidebarIcon" />}
          <Link to={route3}>{Option3}</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
