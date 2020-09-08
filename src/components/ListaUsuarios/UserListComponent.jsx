import React, { Component } from 'react';
import '../../App.css';
import UserComponent from '../Usuario/UserComponent';

export default class UserListComponent extends Component {
  state = {
    users: [
      { name: "Jin", age: 23, rol: "web developer" },
      { name: "Jan", age: 33, rol: "community manager" },
      { name: "John", age: 57, rol: "shop assistant" },
      { name: "Jane", age: 41, rol: "waitress" }
    ]
  };

  removeUser = (i) => {
    const users = [...this.state.users];
    users.splice(i, 1);
    this.setState({users});
    //this.setState(this.state.users.splice(i , 1));
  }

  addUser = () => {
    const users = [...this.state.users];
    let inputNameValue = document.getElementById('inputName');
    let inputAgeValue = document.getElementById('inputAge');
    let inputRoleValue = document.getElementById('inputRole');
    const newUser = {
      name: inputNameValue.value,
      age: parseInt(inputAgeValue.value),
      rol: inputRoleValue.value
    }

    users.push(newUser);
    this.setState({users});
    inputNameValue.value = '';
    inputAgeValue.value = '';
    inputRoleValue.value = '';
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => <UserComponent key={i} index={i} userInfo={user} fnRemoveUser={this.removeUser}/>)}
        </ul>
        <div>
          <p>Add new User:</p>
          <label for="name">Name:</label>
          <input id="inputName" name="name" type="text"/><br></br>
          <label for="age">Age:</label>
          <input id="inputAge" name="age" type="text"/><br></br>
          <label for="role">Role:</label>
          <input id="inputRole" name="role" type="text"/><br></br>
          <button onClick={() => { this.addUser() }}>Add user</button>
        </div>
      </div>
    )
  }
}