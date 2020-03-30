import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FinalLetter from "./Pages/FinalLetter";
import Start from "./Pages/Start";

class CoverLetterApp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   //default is string
    //   UserName: "Sam Smith",
    //   companyName: "SDG",
    //   positionInCompany: "Random Coder",
    //   paragraphOneDropDown: "what you do", // drop down "(the tech used you use,/what you do/our shared value in regards to)",
    //   paragraphOneFillIn: "BlOoD",
    //   signOff: "With regards", //Drop down
    //   techShared: "Charzard, Pikachu, Squirtal",
    //   phoneNumber: "727-867-5609",
    //   email: "fake_email@sdg.com",
    //   userPortfolio: "https://suncoast.io",
    //   headerDate: "unknown", //either todays date or enter own date
    //   userStartedDeveloping: "unknown",
    // };
  }
  updateUserName = (value) => {
    console.log("this is here Bree");
    console.log("UserName " + value)
    this.setState({ UserName: value })
  }

  render() {    
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/FinalLetter">
              <FinalLetter
                // UserName={this.state.UserName}
                // paragraphOneDropDown={this.state.paragraphOneDropDown}
                // companyName={this.state.companyName}
                // paragraphOneFillIn={this.state.paragraphOneFillIn}
                // positionInCompany={this.state.positionInCompany}
                // signOff={this.state.signOff}
                // techShared={this.state.techShared}
                // phoneNumber={this.state.phoneNumber}
                // email={this.state.email}
                // userPortfolio={this.state.userPortfolio}
                // headerDate={this.state.headerDate}
                // userStartedDeveloping={this.state.userStartedDeveloping}
              />
            </Route>
            <Route exact path="/">
              <Start handleChange={(value) => this.updateUserName(value) } />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CoverLetterApp;
