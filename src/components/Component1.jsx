import React from 'react'
import Component2 from './Component2'
import Component3 from './Component3'

function Component1() {
  return (
    <div id='cmp1' className='betterview'>
        <h1>Component1</h1>
        <Component2></Component2>
        <Component3></Component3>
    </div>
  )
}

export default Component1