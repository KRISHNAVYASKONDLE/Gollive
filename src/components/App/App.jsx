import React, { useState } from "react";
import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Nav from "./../Nav/Nav";
import Nav2 from "./../Nav2/Nav2";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TeamBadge from "./../../assets/TeamBadge.png";
import Thirdpage from "../Thirdpage/Thirdpage";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import hi from "date-fns/esm/locale/hi/index.js";

// styles for select components
function Alert(props) {
  return <MuiAlert elevation={15} variant="filled" {...props} />;
}

const selectStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function App() {

  // snackbar
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const [hometeamscore, sethometeamscore] = React.useState();
  let [enableHomeScoreError, setEnableHomeScoreError] = React.useState("");
  let handleHomeTeamScore = (value) => {
    sethometeamscore(value);
    (value >= 1 && value <= 3) ? setEnableHomeScoreError("") : setEnableHomeScoreError("The input should be the number from 1 to 3");
  }

  const [guestteamscore, setguestteamscore] = React.useState();
  let [enableGuestScoreError, setEnableGuestScoreError] = React.useState("");
  let handleGuestTeamScore = (value) => {
    setguestteamscore(value);
    (value >= 1 && value <= 3) ? setEnableGuestScoreError("") : setEnableGuestScoreError("The input should be the number from 1 to 3");
  }
  //input values for second page 
  //for Haven(Firstmap)
  const [havenHometeamscore, setHavenHometeamscore] = React.useState();
  let [enablehavenHometeamscore, setEnablehavenHometeamscore] = React.useState("");
  let handlehavenHometeamscore = (value) => {
    setHavenHometeamscore(value);
    (value >= 0 && value <= 3) ? setEnablehavenHometeamscore("") : setEnablehavenHometeamscore("The input should be the number from 1 to 3");
  }
  //For SecondMap
  const [haveGuestteamscore, setHavenGuestteamscore] = React.useState();
  let [enablehavenGuestteamscore, setEnablehavenGuestteamscore] = React.useState("");
  let handlehavenGuestteamscore = (value) => {
    setHavenGuestteamscore(value);
    (value >= 0 && value <= 3) ? setEnablehavenGuestteamscore("") : setEnablehavenGuestteamscore("The input should be the number from 1 to 3");
  }

  const classes = selectStyles();

  // tabs selection
  var [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (e, val) => {
    setCurrentTab(val);
  };

  // basics tab - date selection
  const [selectedDate, setSelectedDAte] = useState(new Date());
  const handleSelectedDate = (event) => {
    setSelectedDAte(event.target.value);
  };

  // basics tab - home team selection
  const [homeTeam, setHomeTeam] = React.useState("DELHI DRAGONS");
  const handleHomeTeam = (event) => {
    setHomeTeam(event.target.value);
  };

  // basics tab - home team selection
  const [guestTeam, setGuestTeam] = React.useState("");
  const handleGuestTeam = (event) => {
    setGuestTeam(event.target.value);
  };

  // map picks tab - all select ui
  const [firstMap, setFirstMap] = React.useState("");
  const handleFirstMap = (event) => {
    setFirstMap(event.target.value);
  };

  const [firstPickingTeam, setFirstPickingTeam] = React.useState("");
  const handleFirstPickingTeam = (event) => {
    setFirstPickingTeam(event.target.value);
  };

  const [secondMap, setSecondMap] = React.useState("DELHI DRAGONS");
  const handleSecondMap = (event) => {
    setSecondMap(event.target.value);
  };

  const [secondPickingTeam, setSecondPickingTeam] = React.useState("");
  const handleSecondPickingTeam = (event) => {
    setSecondPickingTeam(event.target.value);
  };

  const [thirdMap, setThirdMap] = React.useState("DELHI DRAGONS");
  const handleThirdMap = (event) => {
    setThirdMap(event.target.value);
  };

  const [thirdPickingTeam, setThirdPickingTeam] = React.useState("");
  const handleThirdPickingTeam = (event) => {
    setThirdPickingTeam(event.target.value);
  };
  // const [answer,setAnswer]=useState("");

  const [snackBarStatus, setSnackBarStatus] = React.useState("error");
  const [snackBarMessage, setSnackBarMessage] = React.useState("This is a fail message!");

  return (
    <div className="app">
      <Nav />
      <div className="main-container">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackBarStatus}>
            {snackBarMessage}
          </Alert>
        </Snackbar>

        <div className="left-nav-container">
          <Nav2 />
        </div>
        <div className="tabs-menu-container">
          <div className="tabs-menu-header">
            <AppBar position="relative">
              <Tabs value={currentTab} onChange={handleTabChange}>
                <Tab label="BASICS" />
                <Tab label="MAP PICKS" />
                <Tab label="HOME TEAM STATS" />
                <Tab label="Guest TEAM STATS" />
              </Tabs>
            </AppBar>
          </div>
          <Tabpanel value={currentTab} index={0}>
            <div className="basics-tab">
              <div className="match-details">
                <div className="matchdetails-header">match details</div>
                <div className="selected-tournament">selected tournament</div>
                <div className="Skyleague-tournament">
                  Sky league tournament
                </div>
                <div className="add-flex-class">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      InputAdornmentProps={{ position: "end" }}
                      onChange={(date) => handleSelectedDate(date)}
                    />
                  </MuiPickersUtilsProvider>
                  <TextField style={{ margin: "0 0 0 1em" }} id="outlined-basic" label="MATCH TYPE" variant="outlined" />
                </div>
              </div>

              <div className="match-details">
                <div className="matchdetails-header">TEAMS AND SCORE</div>
                <div className="add-flex-class">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="homeTeamSelectLabel">
                      Select Your Team
                    </InputLabel>
                    <Select value={homeTeam} onChange={handleHomeTeam} label="Select Your Team">
                      <MenuItem value={"DELHI DRAGONS"}>DELHI DRAGONS</MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="guestTeamSelectLabel">
                      Select Your Team
                    </InputLabel>
                    <Select value={guestTeam} onChange={handleGuestTeam} label="Select Your Team">
                      <MenuItem value={"DLEHI DRAGONS"}>DLEHI DRAGONS</MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="teamScores-container add-flex-class">
                  <TextField id="homeTeamScore" type="number" onChange={(event) => { handleHomeTeamScore(event.target.value) }}
                    value={hometeamscore} helperText={enableHomeScoreError} label="TYPE HOME TEAM SCORE" variant="outlined" />
                  <TextField id="guestTeamScore" type="number" onChange={(event) => { handleGuestTeamScore(event.target.value) }}
                    value={guestteamscore} helperText={enableGuestScoreError} label="TYPE GUEST TEAM SCORE" variant="outlined" />
                </div>
              </div>


              <div className="match-details">
                <div className="matchdetails-header">COMMUNITY PREDICTIONS</div>
                <form className={classes.root} noValidate autoComplete="off">
                  <div className="add-flex-class">
                    <TextField spacing="1" id="result1.2" label="TYPE POLL PERCENTAGE" variant="outlined" />
                    <TextField spacing="1" id="result2.1" label="TYPE POLL PERCENTAGE" variant="outlined" />
                  </div>
                  <div className="add-flex-class">
                    <TextField spacing="1" id="result3.0" label="TYPE POLL PERCENTAGE" variant="outlined" />
                    <TextField spacing="1" id="result3.2" label="TYPE POLL PERCENTAGE" variant="outlined" />

                  </div>

                </form>
              </div>
              <div className="nextdirector">
                <div className="nextdet-container">
                  <Button onClick={() => { callApi(); }} variant="contained" color="primary">   NEXT   </Button>

                </div>
              </div>
              <div className="forapitest-container">

              </div>
            </div>

          </Tabpanel>

          {/* <DatePicker value={Date} onChange={setDate} /> */}
          <Tabpanel value={currentTab} index={1}>

            <div className="mappicks-container">
              <div className="firstmap-container">
                <div className="firstmap">first map</div>
                <div className="add-flex-class">
                  <FormControl variant="outlined" className={selectStyles.formCntrll}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      SELECT MAP
                    </InputLabel>
                    <Select id="firstMap" value={firstMap} onChange={handleFirstMap} label="firstMap">
                      <MenuItem value={10}>HAVEN</MenuItem>
                      <MenuItem value={20}>ICEBOX</MenuItem>
                      <MenuItem value={30}>ASCENT</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      SELECT A PICKING TEAM
                    </InputLabel>
                    <Select id="firstpickingteam" value={firstPickingTeam} onChange={handleFirstPickingTeam} label="SELECT A PICKING TEAM">
                      <MenuItem value={"DLEHI DRAGONS"}>
                        DLEHI DRAGONS <Avatar alt="Remy Sharp" src={TeamBadge} />
                      </MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" type="number" onChange={(event) => { handlehavenHometeamscore(event.target.value) }} value={havenHometeamscore} label="HOME TEAM SCORE" helperText={enablehavenHometeamscore} variant="outlined" />
                  <TextField id="outlined-basic" type="number" onChange={(event) => { handlehavenGuestteamscore(event.target.value) }} value={haveGuestteamscore} label="HOME TEAM SCORE" helperText={enablehavenGuestteamscore} label="GUEST TEAM SCORE" variant="outlined" />
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" label="VOD LINK" variant="outlined" />
                  <TextField id="outlined-basic" label="UPLOAD SCREENSHOT" variant="outlined" />
                </div>
              </div>

              <div className="firstmap-container">
                <div className="secondmap">second map</div>
                <div className="add-flex-class">
                  <FormControl variant="outlined" className={selectStyles.formCntrll}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      SELECT MAP
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={secondMap}
                      onChange={handleSecondMap}
                      label="SELECT MAP"
                    >
                      <MenuItem value="">
                        <em>select</em>
                      </MenuItem>
                      <MenuItem value={10}>HAVEN</MenuItem>
                      <MenuItem value={20}>ICEBOX</MenuItem>
                      <MenuItem value={30}>ASCENT</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Your Team
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={secondPickingTeam}
                      onChange={handleSecondPickingTeam}
                      label="Select Your Team"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"DLEHI DRAGONS"}>
                        DLEHI DRAGONS <Avatar alt="Remy Sharp" src={TeamBadge} />
                      </MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" label="HOME TEAM SCORE" variant="outlined" />
                  <TextField id="outlined-basic" label="GUEST TEAM SCORE" variant="outlined" />
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" label="VOD LINK" variant="outlined" />
                  <TextField id="outlined-basic" label="UPLOAD SCREENSHOT" variant="outlined" />
                </div>
              </div>
              <div className="firstmap-container">
                <div className="thirdmap">third map</div>
                <div className="add-flex-class">
                  <FormControl variant="outlined" className={selectStyles.formCntrll}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      selectloc
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={thirdMap}
                      onChange={handleThirdMap}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>select</em>
                      </MenuItem>
                      <MenuItem value={10}>HAVEN</MenuItem>
                      <MenuItem value={20}>ICEBOX</MenuItem>
                      <MenuItem value={30}>ASCENT</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Your Team
                    </InputLabel>
                    <Select id="thirdPickingTeam" value={thirdPickingTeam} onChange={handleThirdPickingTeam} label="Select Your Team">
                      <MenuItem value={"DLEHI DRAGONS"}>
                        DLEHI DRAGONS <Avatar alt="Remy Sharp" src={TeamBadge} />
                      </MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" label="HOME TEAM SCORE" variant="outlined" />
                  <TextField id="outlined-basic" label="GUEST TEAM SCORE" variant="outlined" />
                </div>
                <div className="add-flex-class">
                  <TextField id="outlined-basic" label="VOD LINK" variant="outlined" />
                  <TextField id="outlined-basic" label="UPLOAD SCREENSHOT" variant="outlined" />
                </div>
              </div>
            </div>
            <div className="nextdirector">
              <div className="backdet-container">
                <Button onClick={() => { setCurrentTab(0) }} variant="contained" color="primary"> BACK</Button>
              </div>
              <div className="secnextdet-container">
                <Button onClick={() => { setCurrentTab(2) }} variant="contained" color="primary">   NEXT   </Button>
              </div>
            </div>


          </Tabpanel>
          <Tabpanel value={currentTab} index={2}>
            <Thirdpage />
            <div className="nextdirector">
              <div className="backdet-container">
                <Button onClick={() => { setCurrentTab(1) }} variant="contained" color="primary"> BACK </Button>
              </div>

            </div>
          </Tabpanel>
          <Tabpanel value={currentTab} index={3}>
            Guest TEAM STATS

          </Tabpanel>

        </div>
      </div>
    </div>
  );


  function callApi() {
    var data = {
      "@class": ".LogEventRequest",
      "eventKey": "LeaugeTeamLBUpdate",
      "leagueId": "Sky Esports League-1617015905529",
      "leagueAdditionId": "Sky Esports League-1617015905529-2021-March-1617025320377",
      "homeTeamScore": hometeamscore,
      "awayTeamScore": guestteamscore,
      "matchStartTime": 1619244230000,
      "homeTeam": "Chennai Clutchers",
      "awayTeam": "Bengaluru Crushers",
      "matchId": "Sky Esports League-1617015905529-2021-March-1617025320377-Chennai Clutchers-1619244230000",
      "matchLink": "",
      "selectedByAwayTeam": [

        {
          "homeTeamScore": havenHometeamscore,
          "awayTeamScore": 5,
          "screenShot": "",
          "videoLink": "",
          "mapName": "ICEBOX"
        }
      ],
      "selectedByHomeTeam": [
        {
          "homeTeamScore": 13,
          "awayTeamScore": 10,
          "screenShot": "",
          "videoLink": "",
          "mapName": "HAVEN"
        },
        {
          "homeTeamScore": 13,
          "awayTeamScore": 8,
          "screenShot": "",
          "videoLink": "",
          "mapName": "ASCENT"
        }

      ],
      "homeTeamTieBreaker": 16,
      "awayTeamTieBreaker": -16,
      "playerId": "60378db593d80404f7a18234"
    };

    console.log(data);
    var config = {
      method: 'post',
      url: 'https://h391398vkuek.preview.gamesparks.net/rs/debug/UZVkxRGqK5ewFbmMrEg2yuseepqcm5Tf/LogEventRequest',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    if (hometeamscore <= 3 && guestteamscore <= 3) {
      Axios(config)
        .then(function (response) {
          console.log(response.data.error);
          if (response.data.error) {
            setSnackBarMessage('Please check the details entered!');
            setSnackBarStatus('error');
            setOpen(true);
          }
          else {
            setSnackBarMessage('Successfully submitted!');
            setSnackBarStatus('success');
            setOpen(true);
            setCurrentTab(1);
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      setSnackBarMessage('Please enter the details with in range!');
      setSnackBarStatus('warning');
      setOpen(true);
    }
  }
}
function Tabpanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default App;
