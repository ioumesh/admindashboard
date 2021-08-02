import React from "react";

const Items = ({ title, price, rate, Icon, text, Icon1 }) => {
  return (
    <div className="featuresItem">
      <span className="featuresTitle">{title}</span>
      <div className="featuresMoneyContainer">
        <span className="featuresMoney">{price}</span>
        <span className="featuresMoneyrate">
          {rate}
          {Icon && <Icon className="featuresIcon " />}
          {Icon1 && <Icon1 className="featuresIcon negative" />}
        </span>
      </div>
      <span className="featuresSub">{text}</span>
    </div>
  );
};

export default Items;
