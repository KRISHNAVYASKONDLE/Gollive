import React, { useState } from "react";
import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Nav from "./../Nav/Nav";
import Nav2 from "./../Nav2/Nav2";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

function App() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  const [selectedDate, handleDateChange] = useState(new Date());
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
              <Tabs value={value} onChange={handleTabs}>
                <Tab label="BASICS" />
                <Tab label="MAP PICKS" />
                <Tab label="HOME TEAM STATS" />
                <Tab label="Guest TEAM STATS" />
              </Tabs>
            </AppBar>
          </div>
          <Tabpanel value={value} index={0}>
            <div className="match-details">
              <div className="matchdetails-header">match details</div>
              <div className="selected-tournament">selected tournament</div>
              <div className="Skyleague-tournament">Sky league tournament</div>
              <div className="input-container">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "end" }}
                    onChange={(date) => handleDateChange(date)}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  id="outlined-basic"
                  label="MATCH TYPE"
                  variant="outlined"
                />
              </div>
            </div>
            Basics
          </Tabpanel>

          {/* <DatePicker value={Date} onChange={setDate} /> */}
          <Tabpanel value={value} index={1}>
            MAP PICKS
          </Tabpanel>
          <Tabpanel value={value} index={2}>
            HOME TEAM STATS
          </Tabpanel>
          <Tabpanel value={value} index={3}>
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
