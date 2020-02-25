import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <section className="counter">
        <h1>{Math.sqrt(this.state.counter)} The number in my state is {this.state.counter}</h1>
        <button onClick={() => this.increaseCounter()}>{this.props.buttonName}</button>
      </section>
    )
  }
}