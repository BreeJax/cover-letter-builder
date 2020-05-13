import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { updateCoverLetterString } from "../redux/actions";
import Row from 'react-bootstrap/Row'

class WhyWorkThere extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = (payload) => {
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

        <Link to="/TechShared">
          <Button href="/TechShared" variant="dark">Tech Shared</Button>
        </Link>

        <Link to="/HeaderDate">
          <Button  variant="success">Header Date</Button>
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
