import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";

class StartedDeveloping extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
    return (
      <div>
        <h1>When Did you start Developing?</h1>
        <p>Month and Year, or just Year, will work here</p>

        <Container fluid>
          <Row>
            <Col>
              <label for="headerDate"></label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                onChange={e =>
                  this.handleUpdatedProperties({
                    property: "userStartedDeveloping",
                    value: e.target.value
                  })
                }
                value={this.props.userStartedDeveloping}
                id="userStartedDeveloping"
                placeholder="userStartedDeveloping"
              />
            </Col>
          </Row>
        </Container>

        <Button href="/AboutYou" variant="dark">
          About You
        </Button>

        <Button href="/AboutTheCompany" variant="success">
          Next - The Company
        </Button>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ stateItems }) => ({ ...stateItems });

export default connect(
  mapStateToProps,
  { updateCoverLetterString }
)(StartedDeveloping);
// export default AddTodo;
