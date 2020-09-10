import React, { Component } from 'react';

const defaultUser = {
  name: 'José',
  age: 30,
  role: 'student'
}

export default class FormComponent extends Component {

  state = defaultUser;

  handleChange = ($event) => {
    this.setState({ [$event.target.name]: $event.target.value});
  }

  saveUser = ($event) => {
    $event.preventDefault();
    this.props.fnAddUser(this.state);
    this.setState(defaultUser);
  }

render() {
  return (
      <>
        <div>
          <p>Add a new User:</p>
          <form onSubmit={this.saveUser}>
            <input onChange={this.handleChange} value={this.state.name} id="inputName" name="name" type="text"></input><br></br>
            <input onChange={this.handleChange} value={this.state.age} id="inputAge" name="age" type="text"></input><br></br>
            <input onChange={this.handleChange} value={this.state.role} id="inputRole" name="role" type="text"></input><br></br>
            <input type="submit" value="Add User"></input>
          </form>
        </div>
      </>
    )
  }
}