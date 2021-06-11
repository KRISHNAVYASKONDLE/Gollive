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

      <div className="Options-Container">
        <div className="postion-setter">
          <p className="m0">CREATE</p>
          <p className="m1">Setup</p>
          <p className="m2">Brackets </p>
          <p className="m3">Streams</p>
          <p className="m4">Publish</p>
          <div className="shareir">
            <p className="m5">SHARE</p>
            <p className="m6">Invite Friends</p>
            <p className="m7">Embed Codes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
