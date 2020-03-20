import React, { Component } from "react";
import Panel from "./Panel";
import Toggler from "./Toggler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggler />
        <Panel initialColor="blue" />
      </div>
    );
  }
}

export default App;
