import React, { Component } from 'react';
import '../../App.css';

export default class CountComponent extends Component {
  state = { counter: 0 };

  plusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  minusOne() {
    this.setState({ counter: this.state.counter - 1 });
  }

  doubleCounter = () => {
    this.setState({ counter: this.state.counter * 2 });
  }

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.plusOne}>+</button>
        <button onClick={this.minusOne.bind(this)}>-</button>
        <button onClick={this.doubleCounter}>Double</button>
      </>
    )
  }
}