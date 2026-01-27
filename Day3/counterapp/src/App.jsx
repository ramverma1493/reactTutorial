import React from 'react'
import FruitList from './assets/components/FruitList'

export default function p() {
  let arr = ['apple','mago','orange']
  return (
    <div>
      <FruitList list={arr}/>
    </div>
  )
}
