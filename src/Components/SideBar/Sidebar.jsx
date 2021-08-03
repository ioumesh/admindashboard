import React from "react";
import "./sidebar.scss";
import Menu from "../Menu/Menu";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  Mail,
  Feedback,
  Message,
  GroupAdd,
  Assessment,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            
            <Menu
              title={"Dashboard"}
              Icon1={LineStyle}
              route1={'/'}
              Option1={"Home"}
              Icon2={Timeline}
              route2={'/product'}
              Option2={"Product"}
              Icon3={TrendingUp}
              route3={'/sales'}
              Option3={"Sales"}
            />
            <Menu
              title={"Quick Menu"}
              Icon1={PermIdentity}
              route1={'/users'}
              Option1={"Users"}
              Icon2={Storefront}
              route2={'/Store'}
              Option2={"Store"}
              Icon3={AttachMoney}
              route3={'/transaction'}
              Option3={"Transactions"}
            />
            <Menu
              title={"Notifications"}
              Icon1={Mail}
              Option1={"Mail"}
              Icon2={Feedback}
              Option2={"Feedback"}
              Icon3={Message}
              Option3={"Message"}
            />
            <Menu
              title={"Members"}
              Icon1={GroupAdd}
              Option1={"Manage"}
              Icon2={Assessment}
              Option2={"Reports"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
