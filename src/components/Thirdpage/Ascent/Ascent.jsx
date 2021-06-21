import React from "react";
import "./Ascent.css";
import TextField from "@material-ui/core/TextField";
import unionred from "./../../../assets/images/unionred.svg"
import unionblue from "./../../../assets/images/unionblue.svg"
import fire from "./../../../assets/images/fire.svg"
import palas from "./../../../assets/images/palas.svg"
import arrow from "./../../../assets/images/arrow.svg"
import plus from "./../../../assets/images/plus.svg"

const Ascent = () => {
    return (

        <div className="ascentmain-containter">
            <div className="ascenttext-container">ASCENT</div>
            <div className="upperdivtext-container">
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
            </div>
            <div className="Sf1THALFtext-container">1ST HALF</div>

            <div className="upperdivtext-container">
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
            </div>
            <div className="allnumbers-conatiner">
                <div className="commonsymbol-container">
                    <span className="diag1-box">1</span>
                    <img className="unionred-cont" src={unionred} alt="unionred" />
                </div>
                <div className="commonsymbol-container">
                    <span className="diag1-box">2</span>
                    <img className="unionred-cont" src={unionblue} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">3</span>
                    <img className="unionred-cont" src={palas} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">4</span>
                    <img className="unionred-cont" src={fire} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">5</span>
                    <img className="unionred-cont" src={unionred} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">6</span>
                    <img className="unionred-cont" src={unionblue} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">7</span>
                    <img className="unionred-cont" src={palas} alt="unionred" />
                </div> <div className="commonsymbol-container">
                    <span className="diag1-box">8</span>
                    <img className="unionred-cont" src={fire} alt="unionred" />
                </div>
                <div className="commonsymbol-container">
                    <span className="diag1-box">9</span>
                    <img className="unionred-cont" src={unionred} alt="unionred" />
                </div><div className="commonsymbol-container">
                    <span className="diag1-box">10</span>
                    <img className="unionred-cont" src={unionblue} alt="unionred" />
                </div><div className="commonsymbol-container">
                    <span className="diag1-box">11</span>
                    <img className="unionred-cont" src={palas} alt="unionred" />
                </div><div className="commonsymbol-container">
                    <span className="diag1-box">12</span>
                    <img className="unionred-cont" src={fire} alt="unionred" />
                </div>



            </div>
            <div className="secTHALFtext-container">2nd HALF</div>
            <div className="bothinputtext-container">
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
                <TextField id="selectagents-container" label="SELECT AGENTS PICKED" variant="outlined" />
            </div>


            <div className="newcreating-container">
                <div className="commonsymbol-container">
                    <span className="diag2-box">13</span>
                    <img className="unionred-cont" src={arrow} alt="arrow" />
                </div>
                <div className="scndhalftwo-container">
                    <img className="newnumcreate" src={plus} alt="plus" />
                </div>
            </div>


        </div>



    );
}
export default Ascent;
