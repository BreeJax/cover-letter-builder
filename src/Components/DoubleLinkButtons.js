import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


class DoubleLinkButtons extends Component {
  render() {
    return (
      <div>
        <Button href={"/" + this.props.hrefBack} variant="dark">
          {this.props.backTitle}
        </Button>
        <Button href={"/" + this.props.hrefNext} variant="success">
          {this.props.nextTitle}
        </Button>{" "}
      </div>
    );
  }
}
/*
<DoubleLinkButtons
  hrefBack=""
  backTitle=""
  hrefNext=""
  nextTitle=""
/>
*/

export default DoubleLinkButtons;
