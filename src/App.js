import React, { Component } from "react";
import Panel from "./Panel";
import Toggler from "./Toggler";

class App extends Component {
  state = { show: true };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState(state => ({ show: !state.show }))}>
          {this.state.show ? "Hide panel" : "Show panel"}
        </button>
        <Toggler />
        {/* {this.state.show && <Panel initialColor="blue" />} */}
      </div>
    );
  }
}

export default App;
