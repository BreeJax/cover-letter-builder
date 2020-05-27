import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";
import DoubleLinkButtons  from "../Components/DoubleLinkButtons";

class AboutTheCompany extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>
        <h1>About the Company!</h1>
        <p>Let's find out a little about the company you are applying to!</p>
        <Container fluid>
          <Row>
            <Col>
              <label for="companyName">What's the name of the Company?</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "companyName",
                    value: e.target.value
                  })
                }
                value={this.props.companyName}
                id="companyName"
                placeholder="i.e. Suncoast Developers Guild"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <label for="positionInCompany">
                What position are you applying for?
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "positionInCompany",
                    value: e.target.value
                  })
                }
                value={this.props.positionInCompany}
                id="positionInCompany"
                placeholder="i.e. Junior Javascript Developer"
              />
            </Col>
          </Row>
        </Container>
        <DoubleLinkButtons
          hrefBack="StartedDeveloping"
          backTitle="Started Developing"
          hrefNext="TechShared"
          nextTitle="Next- Shared Tech"
        />{" "}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ stateItems }) => ({ ...stateItems });

export default connect(
  mapStateToProps,
  { updateCoverLetterString }
)(AboutTheCompany);
// export default AddTodo;
