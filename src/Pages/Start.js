import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button, Container, Row, Col } from "react-bootstrap";

class Start extends Component {
  render() {
    return (
      <div>
        <h1>Cover Letter Builder</h1>
        <p>
          This app was created in order to help people get a head start on their
          cover letters, to get you to a point of being '80% complete'.
        </p>
        <p>
          At this time, the only available cover letter type is for developers.
        </p>

        <Button href="/AboutYou" variant="success">
          Developer Cover Letter- First Job
        </Button>
        <Footer />
      </div>
    );
  }
}

export default Start;
