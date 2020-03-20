import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Toggler extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => PubSub.publish("TOGGLE")}>
          Toggle red/blue
        </button>
        <button type="button" onClick={() => PubSub.publish("SET PINK")}>
          Set pink
        </button>
        <button type="button" onClick={() => PubSub.publish("SET YELLOW")}>
          Set yellow
        </button>
      </div>
    );
  }
}
