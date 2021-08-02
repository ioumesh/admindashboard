import React from "react";
import "./navbar.scss";
import {
  NotificationsNone,
  Language,
  Settings,
  Apps,
} from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Umeshadmin</span>
        </div>
        <div className="navbarRight">
          <input type="text" className="navbarSearch" placeholder="Search.." />

          <div className="NavbarVerticalLine">
            <div className="navbarIconsContainer">
              <NotificationsNone />
              <span className="navbarIconBadge">2</span>
            </div>
          </div>
          <div className="NavbarVerticalLine">
            <div className="navbarIconsContainer">
              <Apps />
              <span className="navbarIconBadge">2</span>
            </div>
          </div>
          <div className="NavbarVerticalLine">
            <div className="navbarIconsContainer">
              <Settings />
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="profilepic"
              className="navbarAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
