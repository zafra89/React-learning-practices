import React, { Component } from 'react';
import '../../App.css';

export default class UserComponent extends Component {
  render() {

    const userInfo = this.props.userInfo;
    return (
      <>
        <div>
          <li>My name is {userInfo.name}, Im {userInfo.age} and I work as a {userInfo.rol}
            <button onClick={() => { this.props.fnRemoveUser(this.props.index) }}>X</button></li>
        </div>
      </>
    )
  }
}