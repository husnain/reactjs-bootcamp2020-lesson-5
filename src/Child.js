import React, {useContext} from 'react'
import counterContext from './CounterContext'

export const Child = (props) => {
    let counterValue = useContext(counterContext)
    return (
        <div>
            <b>This is our first Child and its value is {counterValue[0]}</b>
            
            <button onClick={() => {
                counterValue[1](++counterValue[0])
            }}>Increment</button>
        </div>
    )
}
