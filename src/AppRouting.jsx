import React, {useState} from "react";
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
import CounterContext from "./FunctionalComponents/Contexts/CounterContext/CounterContext";
import CounterPlus from "./FunctionalComponents/CounterPlus/CounterPlus";

export default function AppRouting() {
  const [count, setCount] = useState(0)
  const list = ["Nacer", "Vivir", "Morir"];
  const value = 50;

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <MenuFuncComp />
          <Switch>
            <Route path="/counter/">
              <CounterContext.Provider value={value}>
                <CounterFuncComp/>
              </CounterContext.Provider>
              <CounterContext.Provider value={100}>
                <CounterFuncComp/>
              </CounterContext.Provider>

              <CounterContext.Provider value={[count, setCount]}>
                <CounterPlus/>
              </CounterContext.Provider>
              <CounterContext.Provider value={[count, setCount]}>
                <CounterPlus/>
              </CounterContext.Provider>


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
