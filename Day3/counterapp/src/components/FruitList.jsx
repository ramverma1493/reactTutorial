import React from 'react'
import style from './FruitList.module.css'

export default function FruitList({list, clk}) {
  return (
    <div className={style.author}>
      <p>Clicked*2: {clk}</p>
      <ol>
        {
            list.map((ele,idx) => (<li key={idx}>{ele}</li>))
        }
      </ol>
    </div>
  )
}
