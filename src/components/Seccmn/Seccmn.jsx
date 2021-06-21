import React from 'react'
import "./Seccmn.css"
import playerimg from "../../assets/playerimg.svg";
import TextField from "@material-ui/core/TextField";

const Seccmn = ({ name }) => {

    return (
        <div className="allmapsvalue-conatainer">
            <img className="playerimg-container" src={playerimg} alt="playerimg" />
            <p className="valyn-container">{name}</p>

            <div className="textdetails-container">
                <div className="flex">
                    <TextField id="ACS-container" label="ACS" variant="outlined" />
                    <TextField id="ACS-container" label="K/D/A" variant="outlined" />
                    <TextField id="ACS-container" label="FB" variant="outlined" />
                    <TextField id="ACS-container" label="FD" variant="outlined" />
                </div>
                <div className="flex">
                    <TextField id="ACS-container" label="ESR,%" variant="outlined" />

                </div>
            </div>
        </div>);
}
export default Seccmn;