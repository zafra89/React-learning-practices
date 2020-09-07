import React, { Component } from 'react';
import '../../App.css';

export default class HelloWorld extends Component {
  render() {
    return (
      <>
        <p>Hello {this.props.name}, welcome to {this.props.bootcamp}!!!</p>
      </>
    )
  }
}