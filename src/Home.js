import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div id="header">
        <div id="headerContent">
          Mini Twitter React
          <Header />
        </div>
      </div>

      <div id="page">
        <div id="sideBar">
          <div>
            <Sidebar />
          </div>
        </div>
        <div id="body">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Home;
