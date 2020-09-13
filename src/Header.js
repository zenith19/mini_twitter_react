import React from "react";
import CurrentUser from "./CurrentUser";
import "./CurrentUser.css";

const Header = () => {
  return (
    <div className="CurrentUser">
      {localStorage.getItem("loginData") !== null && <CurrentUser />}
    </div>
  );
};

export default Header;
