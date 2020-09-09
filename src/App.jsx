import React from 'react';
import HelloWorld from './components/HelloWorldComponent/HelloWorld.jsx';
import ListComponent from './components/ListItems/ListComponent.jsx';
import './App.scss';
import CountComponent from './components/Count/CountComponent.jsx';
import UserComponent from './components/Usuario/UserComponent.jsx';
import UserListComponent from './components/ListaUsuarios/UserListComponent.jsx';
import CounterFuncComp from './FunctionalComponents/CounterFuncComp/CounterFuncComp.jsx';
import ListFuncComp from './FunctionalComponents/ListFuncComp/ListFuncComp.jsx';
import GalleryList from './FunctionalComponents/GalleryList/GalleryList.jsx';


export default function App() {
  const myname = "José";
  const myboot = "UpgradeHub";
  const userInfo = {
    name: 'José',
    age: 30,
    role: 'web developer'
  }

  const list = ["Nacer","Vivir", "Morir"];

  return (
    <div className="App-header">
      {/*<h1>Welcome to React.</h1>
      <HelloWorld name={myname} bootcamp={myboot}/>
      <HelloWorld name={"Sara"} bootcamp={myboot}/>
      <ListComponent/>
      <CountComponent/>
      {/*<UserComponent userInfo={userInfo}/>
      <UserListComponent/>
      <CounterFuncComp/>
      <ListFuncComp listToShow={list}/>*/}
      <GalleryList/>
    </div>
  );
}