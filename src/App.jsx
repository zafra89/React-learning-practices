import React from 'react';
import HelloWorld from './components/HelloWorldComponent/HelloWorld.jsx';
import ListComponent from './components/ListItems/ListComponent.jsx';
import './App.css';
import CountComponent from './components/Count/CountComponent.jsx';
import UserComponent from './components/Usuario/UserComponent.jsx';
import UserListComponent from './components/ListaUsuarios/UserListComponent.jsx';

export default function App() {
  const myname = "José";
  const myboot = "UpgradeHub";
  const userInfo = {
    name: 'José',
    age: 30,
    rol: 'web developer'
  }

  return (
    <div className="App-header">
      {/*<h1>Welcome to React.</h1>
      <HelloWorld name={myname} bootcamp={myboot}/>
      <HelloWorld name={"Sara"} bootcamp={myboot}/>
      <ListComponent/>
      <CountComponent/>
      {/*<UserComponent userInfo={userInfo}/>*/}
      <UserListComponent/>
    </div>
  );
}