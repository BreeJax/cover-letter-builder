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
    console.log("here we are Bree 2");
    this.props.updateCoverLetterString(payload);
  };
  render() {
    return (
      <div>

        <h1>Why do you want to work at {this.props.companyName}?</h1>
        <p>Let's find out a little about the company you are applying to!</p>

        <label for="paragraphOneFillIn">Finish this sentece: I am interested it working at {this.props.companyName || "your company"} because of...</label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'paragraphOneFillIn', value: e.target.value})}
          value={this.props.paragraphOneFillIn}
          id="paragraphOneFillIn"
          placeholder="i.e. the company culture and the drive to be the best"
        />

        <Link to="/AboutYou">
          <Button href="/AboutYou" variant="dark">About You</Button>
        </Link>

        <Link to="/FinalLetter">
          <Button  variant="success">Finally- Your Letter</Button>
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
