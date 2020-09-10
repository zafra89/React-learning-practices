import React, {useState} from 'react';
import './CounterFuncComp.scss'
import { useParams } from "react-router-dom";

export default function CounterFuncComp() {

  const [count, setCount] = useState(Number(useParams().initialCount));
  const [name, setName] = useState('Jose');

  return(
    <>
      <p>{count}</p>
      <button className="" onClick={() => setCount(count + 1)}>+</button>
      <button className="" onClick={() => setCount(count - 1)}>-</button>
      <button className="" onClick={() => setCount(count * 2)}>*2</button>
      <button className="" onClick={() => setCount(count / 2)}>/2</button>
      <button className="" onClick={() => setCount(0)}>Reset</button>
      <p>{name}</p>
      <button onClick={() => setName(name + 'mon')}>Digimonize</button>
    </>
  )
}