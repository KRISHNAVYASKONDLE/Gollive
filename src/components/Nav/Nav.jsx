import React from "react";
import "./Nav.css";
import GoGameLogo from "./../../assets/GoGameLogo.png";
import GameChar from "./../../assets/GameChar.png";
import menu from "./../../assets/menu.svg";

const Nav = () => {
  return (
    <div className="Nav-bar">
      <p className="left">
        <img className="gogame-logo" src={GoGameLogo} alt="logo" />
      </p>
      <p className="right">
        <img className="GameChar" src={GameChar} alt="gamechar" />
        <img className="menu" src={menu} alt="menu" />
      </p>
    </div>
  );
};

export default Nav;
