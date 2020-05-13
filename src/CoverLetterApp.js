import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutTheCompany from "./Pages/AboutTheCompany";
import AboutYou from "./Pages/AboutYou";
import FinalLetter from "./Pages/FinalLetter";
import HeaderDate from "./Pages/HeaderDate";
import SignOff from "./Pages/SignOff";
import Start from "./Pages/Start";
import StartedDeveloping from "./Pages/StartedDeveloping";
import TechShared from "./Pages/TechShared";
import WhyWorkThere from "./Pages/WhyWorkThere";

class CoverLetterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/FinalLetter">
              <FinalLetter />
            </Route>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/AboutYou">
              <AboutYou  />
            </Route>
            <Route exact path="/AboutTheCompany">
              <AboutTheCompany  />
            </Route>
            <Route exact path="/HeaderDate">
              <HeaderDate  />
            </Route>
            <Route exact path="/SignOff">
              <SignOff  />
            </Route>
            <Route exact path="/StartedDeveloping">
              <StartedDeveloping  />
            </Route>
            <Route exact path="/TechShared">
              <TechShared  />
            </Route>
            <Route exact path="/WhyWorkThere">
              <WhyWorkThere  />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CoverLetterApp;
