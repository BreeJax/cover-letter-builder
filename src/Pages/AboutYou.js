import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";
import DoubleLinkButtons  from "../Components/DoubleLinkButtons";

class AboutYou extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>About You!</h1>
        <p>Let's find out a little about you!</p>
        <Container fluid>
          <Row>
            <Col>
              <label for="UserName">What's your name?</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "UserName",
                    value: e.target.value
                  })
                }
                value={this.props.UserName}
                id="UserName"
                placeholder="i.e. John Smith"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <label for="userPortfolio">
                Do you have a portfolio? If not, link to your github here.
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "userPortfolio",
                    value: e.target.value
                  })
                }
                value={this.props.userPortfolio}
                id="userPortfolio"
                placeholder="i.e. www.portfolio.com"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <label for="phoneNumber">
                What is a phone number to reach you at?
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "phoneNumber",
                    value: e.target.value
                  })
                }
                value={this.props.phoneNumber}
                id="phoneNumber"
                placeholder="i.e. 727-867-5309"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <label for="email">What is an email to reach you at?</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "email",
                    value: e.target.value
                  })
                }
                value={this.props.email}
                id="email"
                placeholder="i.e. fake_email@sdg.com"
              />
            </Col>
          </Row>
        </Container>
        <DoubleLinkButtons
          hrefBack=""
          backTitle="Start Over"
          hrefNext="StartedDeveloping"
          nextTitle="Next - When you Started Developing"
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
)(AboutYou);
// export default AddTodo;
