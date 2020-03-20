import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Panel extends Component {
  state = {
    color: this.props.initialColor
  };

  subscriptions = [
    PubSub.subscribe("SET YELLOW", () => this.setState({ color: "yellow" })),
    PubSub.subscribe("SET PINK", () => this.setState({ color: "pink" })),
    PubSub.subscribe("TOGGLE", () => {
      console.log(`Toggling from ${this.state.color}.`);
      this.setState(({ color }) => ({
        color: color === "red" ? this.props.initialColor : "red"
      }));
    })
  ];

  componentWillUnmount = () => this.subscriptions.forEach(PubSub.unsubscribe);

  render() {
    return (
      <div
        style={{ width: 100, height: 100, backgroundColor: this.state.color }}
      >
        ssss
      </div>
    );
  }
}
