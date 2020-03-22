import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Toggler extends Component {
  _onClickPub = nsString => {
    return event => {
      PubSub.publish(nsString);
    };
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this._onClickPub("TOGGLE")}>
          Toggle red/blue
        </button>
        <button type="button" onClick={this._onClickPub("SET PINK")}>
          Set pink
        </button>
        <button type="button" onClick={this._onClickPub("SET YELLOW")}>
          Set yellow
        </button>
      </div>
    );
  }
}
