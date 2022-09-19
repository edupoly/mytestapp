import React from 'react'

function Counter() {
    var [count,setcount]=React.useState(0)
    function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
  return (
    <div className='betterview' id='counter'>
        <h1>Count:<span data-testid='cnt' id='counterText'>{count}</span></h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Counter