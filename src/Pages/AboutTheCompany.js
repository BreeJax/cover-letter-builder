import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";
import Row from 'react-bootstrap/Row'

class AboutTheCompany extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = (payload) => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>

        <h1>About the Company!</h1>
        <p>Let's find out a little about the company you are applying to!</p>

        <label for="companyName">What's the name of the Company?</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'companyName', value: e.target.value})}
          value={this.props.companyName}
          id="companyName"
          placeholder="i.e. Suncoast Developers Guild"
        />

        <label for="positionInCompany">What position are you applying for?</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'positionInCompany', value: e.target.value})}
          value={this.props.positionInCompany}
          id="positionInCompany"
          placeholder="i.e. Junior Javascript Developer"
        />

        <Link to="/AboutYou">
          <Button href="/AboutYou" variant="dark">About You</Button>
        </Link>

        <Link to="/WhyWorkThere">
          <Button  variant="success">Now the Why</Button>
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
)(AboutTheCompany);
// export default AddTodo;
