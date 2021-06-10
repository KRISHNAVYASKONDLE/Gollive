import React from "react";
import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Nav from "./../Nav/Nav";
import Nav2 from "./../Nav2/Nav2";

function App() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
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
              <Tabs value={value} onChange={handleTabs}>
                <Tab label="BASICS" />
                <Tab label="MAP PICKS" />
                <Tab label="HOME TEAM STATS" />
                <Tab label="Guest TEAM STATS" />
              </Tabs>
            </AppBar>
          </div>

          <Tabpanel value={value} index={0}>
            Basics
          </Tabpanel>
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
