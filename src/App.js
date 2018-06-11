import React, { Component } from "react";
import styled from "styled-components";

import Form from "./Components/Form";
import "./App.css";

const SubmitPanel = styled.div``;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <SubmitPanel>
          <button className="uk-button uk-button-primary">Primary</button>
          <button className="uk-button uk-button-default">Default</button>
        </SubmitPanel>
      </div>
    );
  }
}

export default App;
