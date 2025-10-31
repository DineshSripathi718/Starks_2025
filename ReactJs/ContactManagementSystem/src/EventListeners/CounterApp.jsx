import React from 'react'
import { useState, useRef } from 'react'

function CounterApp() {

    const a = useRef(0)


    const [number, setNumber] = useState(0)

    function ghostUpdateHandler(){
        a.current += 1
    }

    function increaseHanlder(){
        setNumber(number + 1)
        console.log(number)
    }

    function decreaseHandler(){
        setNumber(number - 1)
        console.log(number)
    }

    function resetHandler(){
        setNumber(0)
        console.log(number)
    }


  return (
    <div>
        <h1>Counter App</h1>
        <p>{number}</p>
        <p>Ghost value : {a.current}</p>
        <button onClick={ghostUpdateHandler}>increase ghost value</button>
        <button onClick={increaseHanlder}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default CounterApp