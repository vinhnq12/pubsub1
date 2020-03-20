import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <button type="button" onClick={this._onClickPub("TOGGLE")}>
          Set pink
        </button>
        <button type="button" onClick={this._onClickPub("TOGGLE")}>
          Set yellow
        </button>
      </div>
    );
  }
}
