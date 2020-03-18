import React, { Component } from "react";
import Footer from "./Footer";
import { Button, Link } from "react-bootstrap";

class Start extends Component {
  render() {
    return (
      <div>
        <h1>Cover Letter Builder</h1>
        <Button href="/FinalLetter" variant="success">Start</Button>
        <Footer />
      </div>
    );
  }
}

export default Start;
