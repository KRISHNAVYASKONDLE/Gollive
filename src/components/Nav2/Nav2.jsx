import React from "react";
import "./Nav2.css";
import { ReactComponent as Angleleft } from "./../../assets/AngleLeft.svg";
const Nav2 = () => {
  return (
    <div>
      <div className="Tournament-Container">
        <div className="Angle-Left">
          <Angleleft />
        </div>
        <p className="text-container">
          <p className="newage-esports">new age esports</p>
          <p className="create-tournament">create tournament</p>
        </p>
      </div>

      <div className="Options-Container"></div>
    </div>
  );
};

export default Nav2;
