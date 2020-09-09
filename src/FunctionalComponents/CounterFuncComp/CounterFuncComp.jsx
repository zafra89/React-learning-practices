import React, {useState} from 'react';
import './CounterFuncComp.scss'

export default function CounterFuncComp() {

  const [count, setCount] = useState(0);

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