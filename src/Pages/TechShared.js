import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";
import DoubleLinkButtons  from "../Components/DoubleLinkButtons";

class TechShared extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>
        <h1>Shared Tech!</h1>
        <p>What Tech do you and the company share?</p>

        <Container fluid>
          <Row>
            <Col>
              <label for="techShared"></label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "techShared",
                    value: e.target.value
                  })
                }
                value={this.props.techShared}
                id="techShared"
                placeholder="i.e. Javascript, Java, HTML"
              />
            </Col>
          </Row>
        </Container>

        <DoubleLinkButtons
          hrefBack="AboutTheCompany"
          backTitle="About The Company"
          hrefNext="WhyWorkThere"
          nextTitle="Now the Why"
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
)(TechShared);
// export default AddTodo;
