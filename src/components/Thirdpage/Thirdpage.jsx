import React from "react";
import teammem from "../../assets/teammem.svg"
import DelhiDragons from "../../assets/DelhiDragons.svg"
import playerimg from "../../assets/playerimg.svg"
import TextField from "@material-ui/core/TextField";
//import FormControl from "@material-ui/core/FormControl";
import "./Thirdpage.css";
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
                <div className="allmapsvalue-conatainer">
                    <img className="playerimg-container" src={playerimg} alt="playerimg" />
                    <p className="VALYN-container">VALYN</p>

                    <div className="textdetails-container">
                        <div className="flex">
                            <TextField id="ACS-container" label="ACS" variant="outlined" />
                            <TextField id="ACS-container" label="K/D/A" variant="outlined" />
                            <TextField id="ACS-container" label="FB" variant="outlined" />
                            <TextField id="ACS-container" label="FD" variant="outlined" />
                        </div>
                        <div className="flex">
                            <TextField id="ACS-container" label="ESR,%" variant="outlined" />
                            <TextField id="ACS-container" label="MVP" variant="outlined" />
                            <span className="lastone">
                                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="allmapsvalue-conatainer">
                    <img className="playerimg-container" src={playerimg} alt="playerimg" />
                    <p className="VALYN-container">VALYN</p>

                    <div className="textdetails-container">
                        <div className="flex">
                            <TextField id="ACS-container" label="ACS" variant="outlined" />
                            <TextField id="ACS-container" label="K/D/A" variant="outlined" />
                            <TextField id="ACS-container" label="FB" variant="outlined" />
                            <TextField id="ACS-container" label="FD" variant="outlined" />
                        </div>
                        <div className="flex">
                            <TextField id="ACS-container" label="ESR,%" variant="outlined" />
                            <TextField id="ACS-container" label="MVP" variant="outlined" />
                            <span className="lastone">
                                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* second time */}


        </div>


    );
};
export default Thirdpage;