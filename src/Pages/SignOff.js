import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";
import DoubleLinkButtons  from "../Components/DoubleLinkButtons";

class SignOff extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>
        <h1>Sign off!</h1>
        <p>How would you like to sign off on this letter?</p>

        <Container fluid>
          <Row>
            <Col>
              <label for="signOff"></label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "signOff",
                    value: e.target.value
                  })
                }
                value={this.props.signOff}
                id="signOff"
                placeholder="i.e. With Regards"
              />{" "}
            </Col>
          </Row>
        </Container>

        <DoubleLinkButtons
          hrefBack="HeaderDate"
          backTitle="Header Date"
          hrefNext="FinalLetter"
          nextTitle="Finally- Your Letter"
        />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ stateItems }) => ({ ...stateItems });

export default connect(
  mapStateToProps,
  { updateCoverLetterString }
)(SignOff);
// export default AddTodo;
