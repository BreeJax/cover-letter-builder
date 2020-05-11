import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";

class AboutYou extends React.Component {
  constructor(props) {
    super(props);
  }


  handleUpdatedProperties = (payload) => {
    console.log("here we are Bree 2");
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>
        <h1>About You!</h1>
        <p>Let's find out a little about you!</p>

        <label for="UserName">What's your name?</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'UserName', value: e.target.value})}
          value={this.props.UserName}
          id="UserName"
          placeholder="i.e. John Smith"
        />

        <label for="userPortfolio">Do you have a portfolio? If not, link to your github here.</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'userPortfolio', value: e.target.value})}
          value={this.props.userPortfolio}
          id="userPortfolio"
          placeholder="i.e. www.portfolio.com"
        />

        <label for="phoneNumber">What is a phone number to reach you at?</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'phoneNumber', value: e.target.value})}
          value={this.props.phoneNumber}
          id="phoneNumber"
          placeholder="i.e. 727-867-5309"
        />

        <label for="email">What is an email to reach you at?</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'email', value: e.target.value})}
          value={this.props.email}
          id="email"
          placeholder="i.e. fake_email@sdg.com"
        />

        <Button href="/" variant="dark">Start Over</Button>
        <Link to="/AboutTheCompany">
          <Button  variant="success">Next - The Company</Button>
        </Link>

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = ({stateItems}) => ({...stateItems});


export default connect(
  mapStateToProps,
  { updateCoverLetterString }
)(AboutYou);
// export default AddTodo;
