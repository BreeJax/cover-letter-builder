import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";
import Row from 'react-bootstrap/Row'

class StartedDeveloping extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = (payload) => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>

        <h1>When Did you start Developing?</h1>
        <p>Month and Year, or just Year, will work here</p>

        <label for="headerDate"></label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'userStartedDeveloping', value: e.target.value})}
          value={this.props.userStartedDeveloping}
          id="userStartedDeveloping"
          placeholder="userStartedDeveloping"
        />

        <Link to="/AboutYou">
          <Button href="/AboutYou" variant="dark">About You</Button>
        </Link>

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
)(StartedDeveloping);
// export default AddTodo;
