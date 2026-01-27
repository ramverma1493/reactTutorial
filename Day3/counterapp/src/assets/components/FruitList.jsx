import React from 'react'

export default function FruitList({list}) {
  return (
    <div>
      <ol>
        {
            list.map((x) => (<li>{x}</li>))
        }
      </ol>
    </div>
  )
}
