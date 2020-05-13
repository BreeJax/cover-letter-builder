import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";
import Row from 'react-bootstrap/Row'

class HeaderDate extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = (payload) => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>

        <h1>Header Date</h1>
        <p>This is the date that is going to be on the top of your letter. Think of it as a time stamp:</p>
        <p>When do you want your interviewer to know that you wrote this letter? Today? Yesterday? Tomorrow?</p>

        <label for="headerDate"></label>
        <input
          onChange={e => this.handleUpdatedProperties({property: 'headerDate', value: e.target.value})}
          value={this.props.headerDate}
          id="headerDate"
          placeholder="headerDate"
        />

        <Link to="/WhyWorkThere">
          <Button href="/WhyWorkThere" variant="dark">Why Work There</Button>
        </Link>

        <Link to="/SignOff">
          <Button  variant="success">Sign Off</Button>
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
)(HeaderDate);
// export default AddTodo;
