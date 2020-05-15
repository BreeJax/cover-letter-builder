import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import InputText from "../Components/InputText";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateCoverLetterString } from "../redux/actions";

class HeaderDate extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUpdatedProperties = payload => {
    this.props.updateCoverLetterString(payload);
  };

  render() {
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
                    property: "headerDate",
                    value: e.target.value
                  })
                }
                value={this.props.headerDate}
                id="headerDate"
                placeholder="headerDate"
              />
            </Col>
          </Row>
        </Container>

        <Button href="/WhyWorkThere" variant="dark">
          Why Work There
        </Button>

        <Button href="/SignOff" variant="success">
          Sign Off
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
)(HeaderDate);
// export default AddTodo;
