import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../action/CounterAction'

const ButtonComponent = () => {
const dispatch = useDispatch()
  return (
    <>
        <button onClick={() => dispatch(increment())} >+</button>
        <button onClick={() => dispatch(decrement())} >-</button>
    </>
  )
}

export default ButtonComponent