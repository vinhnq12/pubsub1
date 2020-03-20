import React, { Component } from "react";
import PubSub from "pubsub";

export default class Toggler extends Component {
  _onClick = nsString => {
    PubSub.publish(nsString);
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this._onClick("TOGGLE")}>
          Toggle red/blue
        </button>
        <button type="button" onClick={this._onClick("SET PINK")}>
          Set pink
        </button>
        <button type="button" onClick={this._onClick("SET YELLOW")}>
          Set yellow
        </button>
      </div>
    );
  }
}
