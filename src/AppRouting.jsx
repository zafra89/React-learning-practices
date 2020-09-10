import React from "react";
import './AppRouting.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import GalleryList from "./FunctionalComponents/GalleryList/GalleryList";
import CounterFuncComp from "./FunctionalComponents/CounterFuncComp/CounterFuncComp";
import ListFuncComp from "./FunctionalComponents/ListFuncComp/ListFuncComp";
import MenuFuncComp from "./FunctionalComponents/MenuFuncComp/MenuFuncComp";

export default function AppRouting() {

  const list = ["Nacer", "Vivir", "Morir"];

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <MenuFuncComp />
          <Switch>
            <Route path="/counter/:initialCount">
              <CounterFuncComp />
            </Route>
            <Redirect from='/counter' to='/counter/0' />
            <Route path="/list">
              <ListFuncComp listToShow={list} />
            </Route>
            <Route path="/catsgallery">
              <GalleryList />
            </Route>
            <Route path="/">
              <GalleryList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}