import React, {useReducer} from 'react';
import HelloWorld from './ClassComponents/HelloWorldComponent/HelloWorld.jsx';
import ListComponent from './ClassComponents/ListItems/ListComponent.jsx';
import './App.scss';
import CountComponent from './ClassComponents/Count/CountComponent.jsx';
import UserComponent from './ClassComponents/Usuario/UserComponent.jsx';
import UserListComponent from './ClassComponents/ListaUsuarios/UserListComponent.jsx';
import CounterFuncComp from './FunctionalComponents/CounterFuncComp/CounterFuncComp.jsx';
import ListFuncComp from './FunctionalComponents/ListFuncComp/ListFuncComp.jsx';
import GalleryList from './FunctionalComponents/GalleryList/GalleryList.jsx';
import CounterContext from "./FunctionalComponents/Contexts/CounterContext/CounterContext";
import {CounterWithReducers} from "./PatronRedux/CounterWithReducer/CounterWithReducer";
import GlobalContext from "./contexts/GlobalContext";


export default function App() {
  const myname = "José";
  const myboot = "UpgradeHub";
  const userInfo = {
    name: 'José',
    age: 30,
    role: 'web developer'
  }

  const list = ["Nacer","Vivir", "Morir"];

  const initialState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer (state, action) {
    switch(action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'double':
        return {count: state.count * 2};
      case 'half':
        return {count: state.count / 2};
      case 'reset':
        return {count: 0}
      default :
        throw new Error();
    }
  }

  return (
    <div className="App-header">
      {/*<h1>Welcome to React.</h1>
      <HelloWorld name={myname} bootcamp={myboot}/>
      <HelloWorld name={"Sara"} bootcamp={myboot}/>
      <ListComponent/>
      <CountComponent/>
      {/*<UserComponent userInfo={userInfo}/>
      <UserListComponent/>
      <ListFuncComp listToShow={list}/>
      <GalleryList/>
      <CounterContext.Provider value={5}>
        <CounterFuncComp/>
      </CounterContext.Provider>
      <CounterContext.Provider value={10}>
        <CounterFuncComp/>
      </CounterContext.Provider>*/}

      <GlobalContext.Provider value={[state, dispatch]}>
        <CounterWithReducers/>
      </GlobalContext.Provider>
    </div>
  );
}
