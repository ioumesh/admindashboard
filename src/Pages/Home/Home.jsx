import React from "react";
import Chart from "../../Components/Charts/Chart";
import Features from "../../Components/Features/Features";
import "./home.scss";
import data from "../../Components/Data/UserData";
import Widgetsm from "../../Components/Widgetsm/Widgetsm";
import Widgetlg from "../../Components/Widgetlg/Widgetlg";
const Home = () => {
  return (
    <div className="homeContainer">
      <Features />
      <Chart data={data} title={"User Analytics"} datakey={"ActiveUser"} grid />
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
};

export default Home;
