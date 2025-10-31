import React from 'react'
import CounterApp from './CounterApp'

function EventList() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <>
        <button onClick={clickHandler}>click me</button>
        <CounterApp></CounterApp>
    </>
  )
}

export default EventList