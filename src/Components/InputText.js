import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


class InputText extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default InputText;
