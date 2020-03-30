import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import CoverLetterApp from "./CoverLetterApp";

// const rootElement = document.getElementById("root");

class App extends Component {
  render(){
    return ( <Provider store={store}>
      <CoverLetterApp />
    </Provider>)
  }

}


export default App;
