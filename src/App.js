import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lists from "./Lists";
import ReactIcons from "./components/ReactIcons/ReactIcons";
import Toast from "./components/Toast/Toast";
import ShowModal from "./components/modal/Modal";
import ToolTip from "./components/tooltip/ToolTip";
import Home from "./Home";
import Countup from "./components/Countup/Countup";
import IdleTimerComponent from "./components/Idle Timer/IdleTimer";
import ColorPickerContainer from "./components/Color Picker/ColorPickerContainer";

function App() {
  return (
    <div className="container">
      <Router>
        <Lists />
        <Switch>
          <Route path="/react-icons">
            <ReactIcons />
          </Route>
          <Route path="/toast">
            <Toast />
          </Route>
          <Route path="/modal">
            <ShowModal />
          </Route>
          <Route path="/tippy">
            <ToolTip />
          </Route>
          <Route path="/count-up">
            <Countup />
          </Route>
          <Route path="/idle-timer">
            <IdleTimerComponent></IdleTimerComponent>
          </Route>
          <Route path="/color-picker">
            <ColorPickerContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
