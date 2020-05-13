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

        <h1>Shared Tech!</h1>
        <p>What Tech do you and the company share?</p>

        <label for="techShared"></label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'techShared', value: e.target.value})}
          value={this.props.techShared}
          id="techShared"
          placeholder="i.e. Javascript, Java, HTML"
        />

        <Link to="/AboutTheCompany">
          <Button href="/AboutTheCompany" variant="dark">About The Company</Button>
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
