import React, { Component } from "react";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import InputText from "../Components/InputText"

class Start extends Component {
  render() {
    return (
      <div>
        <h1>Cover Letter Builder</h1>
        <p>This app was created in order to help people get a head start on their cover letters, to get you to a point of being '80% complete'.</p>
        <p>At this time, the only available cover letter type is for developers.</p>

        <InputText 
        id="name" 
        placeholder="e.g. Mazikeen Smith" 
        handleChange={(value) => this.props.handleChange(value) }
        />


        <Button href="/FinalLetter" variant="success">Developer Cover Letter- First Job</Button>
        <Footer />
      </div>
    );
  }
}

export default Start;
