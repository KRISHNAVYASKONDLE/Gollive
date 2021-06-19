import React from "react";
import teammem from "../../assets/teammem.svg"
import DelhiDragons from "../../assets/DelhiDragons.svg"

//import TextField from "@material-ui/core/TextField";
//import FormControl from "@material-ui/core/FormControl";
import "./Thirdpage.css";
import Cmnacsandother from "../Cmnacsandother/Cmnacsandother";
import Ascent from "./Ascent/Ascent";

const Defaultstate = {
    name: "",
}

const Thirdpage = () => {
    return (
        <div className="thirdpagemain-container">
            <div className="teamdetails-container">

                <img className="DelhiDragonslogo-container" src={DelhiDragons} alt="DelhiDragons" />
                <div className="delhitext-container">DELHI DRAGONS</div>

                <div className="seperator">
                    <img className="team-mem" src={teammem} alt="teammem" />
                </div>
            </div>
            <div className="allmaps-container">
                <div className="header-container">
                    < p className="allmaps-text">ALL MAPS</p>
                </div>
                <Cmnacsandother name={"VALYN"} />
                <Cmnacsandother name={"SHOWTIME"} />
                <Cmnacsandother name={"SHOWTIME"} />
                <Cmnacsandother name={"SHOWTIME"} />
                <Cmnacsandother name={"SHOWTIME"} />

            </div>
            {/* second time */}
            <Ascent />

        </div>


    );

};
export default Thirdpage;