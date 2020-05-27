import React, { Component, useState } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";
import DoubleLinkButtons from "../Components/DoubleLinkButtons";
import DatePicker from "react-datepicker";
const moment = require("moment");

// const Picker = props => {
//   const [startDate, setStartDate] = useState();
//   console.log("setStartDate " + startDate);
//   console.log("props " + props);
//   console.log(props);
//
//   return (
//     <DatePicker
//       selected={props.value}
//       onChange={date => props.onChangeUpdate(date)}
//       dateFormat="MMMM d, yyyy"
//       placeholderText="Click to select a date"
//     />
//   );
// };

class HeaderDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
   this.setState({
     startDate: date
   });
 }

  handleUpdatedProperties = payload => {
    console.log("handleUpdatedProperties" + payload);
    console.log(payload);
    this.handleChange(payload.value)
    this.props.updateCoverLetterString(payload);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Header Date</h1>
        <p>
          This is the date that is going to be on the top of your letter. Think
          of it as a time stamp:
        </p>
        <p>
          When do you want your interviewer to know that you wrote this letter?
          Today? Yesterday? Tomorrow?
        </p>



        <DatePicker
          selected={this.state.startDate}
          // onChange={date => props.onChangeUpdate(date)}
          onChange={e =>
            this.handleUpdatedProperties({
              property: "headerDate",
              value: e
            })
          }
          dateFormat="MMMM d, yyyy"
          placeholderText="Click to select a date"
        />

        <DoubleLinkButtons
          hrefBack="WhyWorkThere"
          backTitle="Why Work There"
          hrefNext="SignOff"
          nextTitle="Sign Off"
        />

        <Footer />
      </div>
    );
  }
}

// <Container fluid>
//   <Row>
//     <Col>
//       <label for="headerDate"></label>
//     </Col>
//   </Row>
//   <Row>
//     <Col>
//       <input
//         onChange={e =>
//           this.handleUpdatedProperties({
//             property: "headerDate",
//             value: e.target.value
//           })
//         }
//         value={this.props.headerDate}
//         id="headerDate"
//         placeholder="headerDate"
//       />
//     </Col>
//   </Row>
// </Container>

const mapStateToProps = ({ stateItems }) => ({ ...stateItems });

export default connect(
  mapStateToProps,
  { updateCoverLetterString }
)(HeaderDate);
