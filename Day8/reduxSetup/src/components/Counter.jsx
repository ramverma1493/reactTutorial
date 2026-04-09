import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, counterValue } from '../slices/CounterSlice'

export default function Counter() {
    let value = useSelector(counterValue)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter: {value}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
