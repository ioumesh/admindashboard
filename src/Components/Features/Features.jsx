import React from "react";
import "./features.scss";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import Items from "../Items/Items";
const Features = () => {
  return (
    <div className="features">
      <Items
        title={"Total Revenue"}
        price={"$12099"}
        rate={"5.86%"}
        Icon={ArrowUpward}
        text={"Compare to last month"}
      />
      <Items
        title={"Affiliate Revenue"}
        price={"$12099"}
        rate={"7.86%"}
        Icon={ArrowUpward}
        text={"Compare to last month"}
      />
      <Items
        title={"Refunds"}
        price={"$0"}
        rate={"NA"}
        text={"Compare to last month"}
      />
      <Items
        title={"Avg. Revenue Per User"}
        price={"$28000"}
        rate={"-2.00%"}
        Icon1={ArrowDownward}
        text={"Compare to last month"}
      />
    </div>
  );
};

export default Features;
