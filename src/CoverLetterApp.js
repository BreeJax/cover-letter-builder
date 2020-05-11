import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FinalLetter from "./Pages/FinalLetter";
import Start from "./Pages/Start";
import AboutYou from "./Pages/AboutYou";
import AboutTheCompany from "./Pages/AboutTheCompany";

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CoverLetterApp;
