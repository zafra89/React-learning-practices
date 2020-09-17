import React, { useEffect, useState, useContext } from 'react';
import CounterContext from "../Contexts/CounterContext/CounterContext";

export default function CounterPlus() {
    const [count, setCount] = useContext(CounterContext);

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
