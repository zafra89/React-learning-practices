import React, { Component } from 'react';

export default class ListComponent extends Component {
  render() {
    let items = [];

    for (let i = 0; i < 5; i++) {
      items.push(<li key={i}>Item no.{i + 1} </li>)
    }

    return (
      <ul>
        {items}
      </ul>
    )
  }
}