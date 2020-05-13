import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";
import Row from 'react-bootstrap/Row'

class SignOff extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = (payload) => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>

        <h1>Sign off!</h1>
        <p>How would you like to sign off on this letter?</p>

        <label for="signOff"></label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'signOff', value: e.target.value})}
          value={this.props.signOff}
          id="signOff"
          placeholder="i.e. With Regards"
        />

        <Link to="/HeaderDate">
          <Button href="/HeaderDate" variant="dark">Header Date</Button>
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
