import React, { Component } from 'react';
import UserComponent from '../Usuario/UserComponent';
import FormComponent from '../FormComponent/FormComponent';

export default class UserListComponent extends Component {
  state = {
    users: [
      { name: "Jin", age: 23, role: "web developer" },
      { name: "Jan", age: 33, role: "community manager" },
      { name: "John", age: 57, role: "shop assistant" },
      { name: "Jane", age: 41, role: "waitress" }
    ]
  };

  removeUser = (i) => {
    const users = [...this.state.users];
    users.splice(i, 1);
    this.setState({users});
  }

  addUser = (users) => {
    this.setState({users: [...this.state.users, users]})
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => <UserComponent key={i} index={i} userInfo={user} fnRemoveUser={this.removeUser}/>)}
        </ul>
        <FormComponent fnAddUser={this.addUser}/>
      </div>
    )
  }
}