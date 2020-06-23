import React, {useReducer} from 'react'
import counterReducer from './CounterReducer';

export const Child2 = () => {
    const [state, dispatch] = useReducer(counterReducer, 10);
    // console.log(state)
    return (
        <>
        <b>This is our second Component and its value is {state}</b>
        <br />
        <button onClick={
            () => {
                dispatch('INCREMENT')
            }
        }>Increment value using reducer {state}</button>
          <h4>Child 2</h4>  
        </>
    )
}

export default Child2;