import React, {useContext, useReducer} from "react";
import GlobalContext from "../../contexts/GlobalContext";

export const CounterWithReducers = () => {

    const [state, dispatch] = useContext(GlobalContext)

    return(
        <div>
            <p>Count: {state.count}</p>
            <button className="" onClick={() => dispatch({type: 'increment'})}>+</button>
            <button className="" onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button className="" onClick={() => dispatch({type: 'double'})}>x2</button>
            <button className="" onClick={() => dispatch({type: 'half'})}>/2</button>
            <button className="" onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
