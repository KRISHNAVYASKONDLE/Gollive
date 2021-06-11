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

// styles for select components
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
  const classes = selectStyles();

  // tabs selection
  const [currentTab, setCurrentTab] = React.useState(0);
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

  return (
    <div className="app">
      <Nav />
      <div className="main-container">
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
                <div className="input-container">
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
                  <TextField
                    id="outlined-basic"
                    label="MATCH TYPE"
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="match-details">
                <div className="matchdetails-header">TEAMS AND SCORE</div>

                <div className="teamselect-container">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>
                      Select Your Team
                    </InputLabel>
                    <Select value={homeTeam} onChange={handleHomeTeam} label="Select Your Team">
                      <MenuItem value={"DELHI DRAGONS"}>DELHI DRAGONS</MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Your Team
                    </InputLabel>
                    <Select value={guestTeam} onChange={handleGuestTeam} label="Select Your Team"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"DLEHI DRAGONS"}>DLEHI DRAGONS</MenuItem>
                      <MenuItem value={"KOLKATA TRIDENTS"}>
                        KOLKATA TRIDENTS
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <TextField
                  type="number"
                  id="outlined-basic"
                  label="type home team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="type guest team score"
                  variant="outlined"
                />
              </div>
              <div className="match-details">
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    spacing="1"
                    id="outlined-basic"
                    label="result:1-2"
                    variant="outlined"
                  />
                  <TextField
                    spacing="1"
                    id="outlined-basic"
                    label="result:3-0"
                    variant="outlined"
                  />{" "}
                  <TextField
                    spacing="1"
                    id="outlined-basic"
                    label="result:2-1"
                    variant="outlined"
                  />{" "}
                  <TextField
                    spacing="1"
                    type="Number"
                    id="outlined-basic"
                    label="result:0-3"
                    variant="outlined"
                  />
                </form>
              </div>
            </div>
            Basics
          </Tabpanel>

          {/* <DatePicker value={Date} onChange={setDate} /> */}
          <Tabpanel value={currentTab} index={1}>
            {/* MAP PICKS */}
            <div className="mappicks-container">
              <div className="firstmap-container">
                <div className="firstmap">first map</div>
                <FormControl variant="outlined" className={selectStyles.formCntrll}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    selectloc
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={firstMap}
                    onChange={handleFirstMap}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>select</em>
                    </MenuItem>
                    <MenuItem value={10}>delhi</MenuItem>
                    <MenuItem value={20}>hyderabad</MenuItem>
                    <MenuItem value={30}>pune</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Your Team
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={firstPickingTeam}
                    onChange={handleFirstPickingTeam}
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
                <TextField
                  id="outlined-basic"
                  label="home team score"
                  variant="outlined"
                />
                <TextField id="outlined-basic" label="guest team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="vod link"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="upload file"
                  variant="outlined"
                />
              </div>
              <div className="firstmap-container">
                <div className="secondmap">second map</div>
                <FormControl variant="outlined" className={selectStyles.formCntrll}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    selectloc
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={secondMap}
                    onChange={handleSecondMap}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>select</em>
                    </MenuItem>
                    <MenuItem value={10}>delhi</MenuItem>
                    <MenuItem value={20}>hyderabad</MenuItem>
                    <MenuItem value={30}>pune</MenuItem>
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
                <TextField
                  id="outlined-basic"
                  label="home team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="guest team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="vod link"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="upload file"
                  variant="outlined"
                />
              </div>
              <div className="firstmap-container">
                <div className="thirdmap">third map</div>
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
                    <MenuItem value={10}>delhi</MenuItem>
                    <MenuItem value={20}>hyderabad</MenuItem>
                    <MenuItem value={30}>pune</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Your Team
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={thirdPickingTeam}
                    onChange={handleThirdPickingTeam}
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
                <TextField
                  id="outlined-basic"
                  label="home team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="guest team score"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="vod link"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="upload file"
                  variant="outlined"
                />
              </div>
            </div>
          </Tabpanel>
          <Tabpanel value={currentTab} index={2}>
            <Nav />
          </Tabpanel>
          <Tabpanel value={currentTab} index={3}>
            Guest TEAM STATS
          </Tabpanel>
        </div>
      </div>
    </div>
  );
}

function Tabpanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default App;
