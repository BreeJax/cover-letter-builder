import React, { Component } from 'react';
import FinalLetter from "./Components/FinalLetter"

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    userName: "Mark Smith",
    companyName: "Haneke",
    positionInCompany: "Morturary",
    paragraphOneDropDown: "what you do",//"(the tech used you use,/what you do/our shared value in regards to)",
    paragraphOneFillIn:"politics and node",
    signOff: "With regards",
    techUserUses: "node"
  }
}
  render() {
    return (
      <div className="App">
        <FinalLetter
          userName={this.state.userName}
          paragraphOneDropDown={this.state.paragraphOneDropDown}
          companyName={this.state.companyName}
          paragraphOneFillIn={this.state.paragraphOneFillIn}
          positionInCompany={this.state.positionInCompany}
          signOff={this.state.signOff}
          techUserUses={this.state.techUserUses}
        />
      </div>
    );
  }
}

export default App;
