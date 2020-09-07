import React from 'react';
import HelloWorld from './components/HelloWorldComponent/HelloWorld.jsx';
import ListComponent from './components/List/ListComponent.jsx';
import './App.css';
import CountComponent from './components/Count/CountComponent.jsx';

export default function App() {
  const myname = "Jose";
  const myboot = "UpgradeHub";
  return (
    <div className="App-header">
      <h1>Welcome to React.</h1>
      <HelloWorld name={myname} bootcamp={myboot}/>
      <HelloWorld name={"Sara"} bootcamp={"BeSoccer"}/>
      <ListComponent/>
      <CountComponent/>
    </div>
  );
}