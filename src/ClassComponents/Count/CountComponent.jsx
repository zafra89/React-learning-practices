import React, { Component } from 'react';

export default class CountComponent extends Component {

  state = {
    counter: 0,
    name: "José"
   };

   inputValue = () => {
    return document.getElementById('input').value;
   }

   digimonizer = () => {
     this.setState({ name: this.state.name + 'mon'})
   }

  plusOne = () => {
    this.setState({ counter: this.state.counter + this.inputValue() });
  }

  minusOne() {
    this.setState({ counter: this.state.counter - this.inputValue() });
  }

  multiply = () => {
    this.setState({ counter: this.state.counter * this.inputValue() });
  }

  divide = () => {
    this.setState({ counter: this.state.counter / this.inputValue() });
  }

  resetCounter = () => {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <>
        <p>Name: {this.state.name}</p>
        <button onClick={this.digimonizer}>Digimonize the name</button>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.plusOne}>+</button>
        <button onClick={this.minusOne.bind(this)}>-</button> 
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>÷</button>
        <button onClick={this.resetCounter}>C</button>
        <input type="number" id="input" placeholder="Escribe un número"/>
        {/*necesario el bind en minusOne puesto que la función minusOne no es flecha */}
      </>
    )
  }
}