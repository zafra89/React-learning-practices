import React, { useEffect, useState, useContext } from 'react';
import './CounterFuncComp.scss'
import { useParams } from "react-router-dom";
import CounterContext from "../Contexts/CounterContext/CounterContext";

export default function CounterFuncComp() {
    const initialValue = useContext(CounterContext);
    const [count, setCount] = useState(initialValue);


  return(
    <>
      <p>{count}</p>
      <button className="" onClick={() => setCount(count + 1)}>+</button>
      <button className="" onClick={() => setCount(count - 1)}>-</button>
      <button className="" onClick={() => setCount(count * 2)}>*2</button>
      <button className="" onClick={() => setCount(count / 2)}>/2</button>
      <button className="" onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
